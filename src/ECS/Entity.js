export class Entity{
    constructor(data){
        this.id = this._generateId();
        Entity._count++;
        this.components = {};

        return this;

    } 

    addComponent(component){
        this.components[component.name] = component;
        return this;
    }

    removeComponent(componentName){
        let name;
        if(typeof componentName === 'function'){
            name = componentName.name;
        }
        delete this.components[name];
        return this;
    }

    print(){
        console.log(JSON.stringify(this, null, 4));
        return this;
    }

    _generateId(){
        const stringDate = (+new Date()).toString(16);
        const stringRandomMath = (Math.random() * 100000000 | 0).toString(16);
        return stringDate + stringRandomMath + Entity._count;
    }
}

Entity._count = 0;