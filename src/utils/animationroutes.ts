type Carddatatype = {
    title : string,
    description : string,
    bgColor : string,
    path : string,
    textColor? : string
}

const cardData : Carddatatype[] = [
    {
        title : 'Fade',
        description : 'Letters appear to fade in and out and displays a seamless transition effect when user views it.',
        bgColor: '#527853',
        path: '/fade',
        textColor: 'black'
    },
    {
        title : 'Rotate',
        description : 'Letters appear to rotate in and out and displays a seamless transition effect when user views it.',
        bgColor: '#B0FFFF',
        path: '/rotate',
        textColor: 'black'
    },
    {
        title : 'Scale',
        description : 'This animation creates the illusion of the object either expanding (growing larger) or shrinking (getting smaller).',
        bgColor: '#D298FF',
        path: '/scale',
        textColor: '#000'
    },
    {
        title : 'Letters',
        description : 'Each letter gradually appears (fade in) or disappears (fade out) on the screen, one after the other.',
        bgColor :'#3081D0',
        path: '/letters',
        textColor: '#fff'
    },
    {
        title : 'Explosion',
        description : 'Letters appear to explode in and out and displays a seamless transition effect when user views it.',
        bgColor :'#3081D0',
        path: '/explosion',
        textColor: '#fff'
    }
]

const animationRoutes = [
    'fade',
    'rotate',
    'scale',
    'letters'
]

export {animationRoutes , cardData };
