const Ziggy = {"url":"http:\/\/localhost:8000","port":8000,"defaults":{},"routes":{"welcome":{"uri":"\/","methods":["GET","HEAD"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };
