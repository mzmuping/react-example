class Event {

    events = {}

    on(name, cb) {
        const events = this.events
        if (events[name]) {
            events[name].push(cb)
        } else {
            events[name] = []
            events[name].push(cb)
        }
    }
    pub(name, ...params) {
        const handles = this.events[name]
        if (handles) {
            handles.forEach(handler => {
                handler(...params)
            });
        }
    }

    remove(name, cb) {
        const handles = this.events[name];
        if (!handles) return;
        if (!cb) {
            delete this.events[name]
        } else {
            handles.forEach((handler, index) => {
                if (handler === cb) {
                    handles.splice(index, 1)
                }
            })

            if (handles.length === 0) {
                delete handles[name]
            }
        }
    }
}


export default new Event();
