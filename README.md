# Markdown_workbook
_____
> markdown Vue project [Vue Vuex Vue-router]

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```
## Src structure
```
├── assets 
│   └── darkness.css // markdown stylesheet
├── components  
│   ├── rawEditor.vue // input 
│   └── renderEditor.vue // markdown output
├── main.js // project entry
├── router.js // SPA router settings
├── views // pages
│   ├── 404.vue // link to '404' except going to '/'
│   └── index.vue // '/' index page, containing rawEditor & renderEditor
└── vuex
    └── store.js //including state,mutation,actions,getters
```

## Something to say ...

It's a project based on [njaulj/my_workbook](https://github.com/njaulj/my_workbook) ,but the njaulj's project doesn't uses the vue 2.x, and I'm learning that for the time being.So that's why this project built.

Of course , there were some question during the coding procedure.

Such as 
```
store.js

...
const mutations = {
  "MARKDOWN_SUCCESS": function(state,arr){
    state.rawHtml = arr[0] ;
    state.renderHtml = arr[1] ;
    //console.log(state.rawHtml,state.renderHtml);
  }
};

const actions = {
  MARKDOWN_SUCCESS( { commit } , e ) {
    commit('MARKDOWN_SUCCESS', [e.target.value, marked(e.target.value)])
  }
};
...

```
I used to pass three parameters to the function "MARKDOWN_SUCCESS" ,however,the console came out 
```
bla undefined
blabla undefined
blablabla undefined

```

Obviously the third patameter wasn't passed the value to function "MARKDOWN_SUCCESS" .Therefore, I refered to the api document.
```
Vuex.Store Instance Methods

commit(type: string, payload?: any) | commit(mutation: Object)

Commit a mutation. Details

dispatch(type: string, payload?: any) | dispatch(action: Object)

Dispatch an action. Returns a Promise that resolves all triggered action handlers. Details

replaceState(state: Object)

Replace the store's root state. Use this only for state hydration / time-travel purposes.

watch(getter: Function, cb: Function, options?: Object)

Reactively watch a getter function's return value, and call the callback when the value changes. The getter receives the store's state as the only argument. Accepts an optional options object that takes the same options as Vue's vm.$watch method.

To stop watching, call the returned handle function.

subscribe(handler: Function)

Subscribe to store mutations. The handler is called after every mutation and receives the mutation descriptor and post-mutation state as arguments:

store.subscribe((mutation, state) => {
  console.log(mutation.type)
  console.log(mutation.payload)
})
Most commonly used in plugins. Details

registerModule(path: string | Array<string>, module: Module)

Register a dynamic module. Details

unregisterModule(path: string | Array<string>)

Unregister a dynamic module. Details

hotUpdate(newOptions: Object)

Hot swap new actions and mutations. Details
```
And I'm clear about it.I use the array to store the parameter. Object is also a good choice~


#### If u like this project, welcome to click the 'star' or the 'folk'~~~
