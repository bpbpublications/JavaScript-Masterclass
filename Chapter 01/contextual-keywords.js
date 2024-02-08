let obj = {
    _value: 1,
    get value() {
        return this._value;
    },
    set value(value) {
        this._value = value;
    }
};
