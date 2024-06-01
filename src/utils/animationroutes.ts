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
        bgColor :'#527832',
        path: '/letters',
        textColor: '#fff'
    },
    {
        title : 'Explosion',
        description : 'Letters appear to explode in and out and displays a seamless transition effect when user views it.',
        bgColor :'#3081D0',
        path: '/explosion',
        textColor: '#fff'
    },
    {
        title : 'Cinematic',
        description : 'A cinematic animation where letters appear to change along a parallax path giving a emerging out effect.',
        bgColor :'#FF9EAA',
        path: '/cinematic',
        textColor: '#fff'
    },
    {
        title : 'Wave',
        description : 'Letters appear to wave in and out and displays a seamless transition effect when user views it.',
        bgColor :'#3081D0',
        path: '/wave',
        textColor: '#fff'
    },
    {
        title : 'Slide',
        description : 'Letters appear to slide in and out and displays a seamless transition effect when user views it.',
        bgColor :'#3081D0',
        path: '/slide',
        textColor: '#fff'
    },
    {
        title : 'Bounce',
        description : 'Letters appear to bounce in and out and displays a seamless transition effect when user views it.',
        bgColor :'#3081D0',
        path: '/bounce',
        textColor: '#fff'
    },
    {
        title : 'Shake',
        description : 'Letters appear to shake in and out and displays a seamless transition effect when user views it.',
        bgColor :'#3081D0',
        path: '/shake',
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
