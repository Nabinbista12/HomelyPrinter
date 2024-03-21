let typed = new Typed('#element', {
    strings: ['Web development', 'App development', 'Python development', 'Frontend and Backend Development'],
    typeSpeed: 50,
    loop: false,
    onComplete: function(self) {
        self.reset()
    }
});