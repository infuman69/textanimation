import { doc, getDoc, setDoc } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "@/firebase/config";
import { toast } from "react-toastify";

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const userDocRef = doc(db, "users", res.user.uid);
        const userDoc = await getDoc(userDocRef);
        if (!userDoc.exists()) {
            await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                email: res.user.email,
                displayName: res.user.displayName,
                photoURL: res.user.photoURL,
                phone: res.user.phoneNumber,
                createdAt: new Date(),
                lastLoginAt: new Date(),
            });
            toast.success("Account created successfully");
        }
        else{
            toast.success("Logged in successfully");
        }
        return res;

    } catch (error:any) {
        toast.error(error.message);
    }
}

export default signInWithGoogle;