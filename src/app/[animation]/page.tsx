export default function Page({ params }: { params: { animation: string } }) {
    return <main className="h-screen w-full">My Post: {params.animation}</main>
}