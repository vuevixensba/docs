(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{58:function(e,t,s){e.exports=s.p+"assets/img/petshop_chapter2.d0070578.jpg"},63:function(e,t,s){"use strict";s.r(t);var a=[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"📋-chapter-2-build-a-pet-gallery"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#📋-chapter-2-build-a-pet-gallery","aria-hidden":"true"}},[this._v("#")]),this._v(" 📋 Chapter 2: Build a Pet Gallery")])},function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",[t("strong",[this._v("Project Goal")])]),t("th",[this._v("Learn how to manipulate data in a web app")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("strong",[this._v("What you’ll learn")])]),t("td",[this._v("Using static data, you'll build a card interface to show many adoptable dogs")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[t("strong",[this._v("Tools you’ll need")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("strong",[this._v("Time needed to complete")])]),t("td",[this._v("1 hour")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"instructions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#instructions","aria-hidden":"true"}},[this._v("#")]),this._v(" Instructions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("If you need to restart your project, clone "),t("a",{attrs:{href:"https://github.com/VueVixens/projects/tree/master/chapter-1-end",target:"_blank",rel:"noopener noreferrer"}},[this._v("this repo")]),this._v(" into Code Sandbox after logging in.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("💡")]),t("p",[this._v('"A single-page application (SPA) is a web application or web site that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from a server" ('),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Single-page_application",target:"_blank",rel:"noopener noreferrer"}},[this._v("Wikipedia")]),this._v(")")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To create our SPA with Vue, we need to use the "),t("a",{attrs:{href:"https://github.com/vuejs/vue-router",target:"_blank",rel:"noopener noreferrer"}},[this._v("vue-router")]),this._v(". The vue-router is Vue's official router (the library that makes moving from page to page easy and efficient). It's specifically designed to work with SPAs, which have some special requirements like nested routes and passing data over the router. Add it to your app's dependencies (click the "),t("code",[this._v("Add Dependency")]),this._v(" button and search for "),t("code",[this._v("vue-router")]),this._v("), and install it (like we did earlier with Vuetify).")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"the-router"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-router","aria-hidden":"true"}},[this._v("#")]),this._v(" The Router")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Open "),t("code",[this._v("main.js")]),this._v(" file and import vue-router:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("import VueRouter from 'vue-router';\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Now we need to use the plugin with "),t("code",[this._v("Vue.use()")]),this._v(" global method:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("Vue.use(VueRouter);\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("💡")]),t("p",[this._v("Stop and think about our app's architecture. In our application, the header and footer will be present on each page and the content between them will change. To accomplish this, the component matched by the route will be rendered inside a "),t("code",[this._v("<router-view>")]),this._v(" tag. We need to move away from having all our app's parts in App.vue, so we need to do some refactoring.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"create-the-home-page"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-the-home-page","aria-hidden":"true"}},[this._v("#")]),this._v(" Create the Home Page")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Let's create a separate component for all the elements contained in "),t("code",[this._v('<div class="wrapper">')]),this._v(".")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("p",[e._v("Go to the "),s("code",[e._v("views")]),e._v(" folder in "),s("code",[e._v("src")]),e._v(" (create it if it doesn't exist) and create a file called "),s("code",[e._v("Home.vue")]),e._v(".")])]),s("li",[s("p",[e._v("Add "),s("code",[e._v("<template></template>")]),e._v(" tag to this new file")])]),s("li",[s("p",[e._v("Go to the "),s("code",[e._v("App.vue")]),e._v(" file. Copy the "),s("code",[e._v('<div class="wrapper">')]),e._v(" and all elements inside it and paste it inside template in "),s("code",[e._v("Home.vue")]),e._v(". This is all the code between the "),s("code",[e._v("<header>")]),e._v(" and "),s("code",[e._v("<footer>")]),e._v(" tags. Delete that code from "),s("code",[e._v("App.vue")]),e._v(".")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"create-a-pets-page"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-pets-page","aria-hidden":"true"}},[this._v("#")]),this._v(" Create a Pets Page")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Now, let's create a "),t("code",[this._v("Pets.vue")]),this._v(" page. In "),t("code",[this._v("src/views")]),this._v(", like you did for the Home.vue page, create a "),t("code",[this._v("Pets.vue")]),this._v(" file. Add a layout that will use the Vuetify card styling:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('<template>\n  <v-container grid-list-md fluid>\n    <v-layout wrap>\n      <v-flex xs12 sm4 md3>\n        <v-card color="grey lighten-2">\n          <v-card-media src="https://goo.gl/6CQNDo" height="170px">\n          </v-card-media>\n          <v-card-title>\n            <div>\n              <h3>Looking for a dog?</h3>\n            </div>\n          </v-card-title>\n        </v-card>\n      </v-flex>\n    </v-layout>\n  </v-container>\n</template>\n\n<style scoped>\np {\n  margin: 0;\n}\n</style>\n')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"add-the-routes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-the-routes","aria-hidden":"true"}},[this._v("#")]),this._v(" Add the Routes")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Let's go back to "),t("code",[this._v("main.js")]),this._v(". First, let's import our new components under the list of imports at the top:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('import Home from "./views/Home";\nimport Pets from "./views/Pets";\n')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Now we can create routes. Each route is an object specifying a path and a component which will be rendered in this path. Let's add two routes: one is for our homepage and one for pets. Add this code under the "),t("code",[this._v("Vue.use...")]),this._v(" lines:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('const routes = [\n  { path: "/", component: Home },\n  { path: "/pets", component: Pets }\n];\n')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Now we have to create a "),t("code",[this._v("VueRouter")]),this._v(" instance and pass our routes object to it. Add this line above the "),t("code",[this._v("const routes")]),this._v(" object you just pasted in:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("const router = new VueRouter({ routes });\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Finally, we need to add the router to our Vue instance. To do this, just add a reference to "),t("code",[this._v("router")]),this._v(" right after the "),t("code",[this._v('template: "<App/>",')]),this._v(" string:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('new Vue({\n   el: "#app",\n   components: { App },\n   template: "<App/>",\n   router\n });\n')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Now open App.vue. Replace the whole "),t("code",[this._v('<div class="wrapper">')]),this._v(" chunk that you ripped out with a "),t("code",[this._v("<router-view></router-view>")]),this._v(" tag, sandwiching it right between the header and footer. Your store just came back to life!")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Test your progress. Add "),t("code",[this._v("/pets")]),this._v(" at the end of the URL string in the address bar. Now you can see the Pets component instead of Home!")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"add-navigation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-navigation","aria-hidden":"true"}},[this._v("#")]),this._v(" Add Navigation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The toolbar component in Vuetify is called "),t("code",[this._v("v-toolbar")]),this._v(". Let's add it right below the "),t("code",[this._v("h1")]),this._v(" tag in our header:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('<v-toolbar>\n    <v-toolbar-items>\n        <v-btn to="/" flat>Home</v-btn>\n        <v-btn to="/pets" flat>Pets</v-btn>\n    </v-toolbar-items>\n</v-toolbar>\n')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You can see two buttons in this toolbar. Each of them has a "),t("code",[this._v("to")]),this._v(" attribute: it's a router-link to a certain route. Now we can easily switch between pages - give it a try by clicking the buttons.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"build-up-some-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#build-up-some-data","aria-hidden":"true"}},[this._v("#")]),this._v(" Build up some data")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("We're going to add some dummy data in a new folder called "),t("code",[this._v("data")]),this._v(". Create that folder in "),t("code",[this._v("src")]),this._v(" and add a blank file called "),t("code",[this._v("dogs.js")]),this._v(". Paste in the following json object:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('export const Dogs = [\n  {\n    name: "Max",\n    breed: "husky",\n    img: "https://dog.ceo/api/img/husky/n02110185_1469.jpg"\n  },\n  {\n    name: "Rusty",\n    breed: "shiba",\n    img: "https://dog.ceo/api/img/shiba/shiba-13.jpg"\n  },\n  {\n    name: "Rocco",\n    breed: "boxer",\n    img: "https://dog.ceo/api/img/boxer/n02108089_14112.jpg"\n  },\n  {\n    name: "Zoey",\n    breed: "beagle",\n    img: "https://dog.ceo/api/img/beagle/n02088364_11136.jpg"\n  },\n  {\n    name: "Duke",\n    breed: "doberman",\n    img: "https://dog.ceo/api/img/doberman/n02107142_4653.jpg"\n  },\n  {\n    name: "Lily",\n    breed: "malamute",\n    img: "https://dog.ceo/api/img/malamute/n02110063_1104.jpg"\n  },\n  {\n    name: "Winston",\n    breed: "pug",\n    img: "https://dog.ceo/api/img/pug/n02110958_15626.jpg"\n  },\n  {\n    name: "Angel",\n    breed: "samoyed",\n    img: "https://dog.ceo/api/img/samoyed/n02111889_4470.jpg"\n  }\n];\n')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("It exports one "),t("code",[this._v("const")]),this._v(", "),t("code",[this._v("Dogs")]),this._v(", containing all the data we need.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Let's import this data into our pets component. Go to the "),t("code",[this._v("Pets.vue")]),this._v(" file and add the following script block under the "),t("code",[this._v("<template>")]),this._v(" block. This tag imports the Dogs data:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('<script>\n  import { Dogs } from "../data/dogs";\n<\/script>\n')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Now we have to add this data to our component data property. Edit the "),t("code",[this._v("<script>")]),this._v(" tag:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('<script>\n  import { Dogs } from "../data/dogs";\n  export default {\n    data() {\n      return {\n        dogs: Dogs\n      };\n    }\n   };\n  <\/script>\n')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This script ensures that the array "),t("code",[this._v("dogs")]),this._v(" is a part of "),t("code",[this._v("Pets")]),this._v(" component's state and can be used in our template.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"append-the-data-to-a-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#append-the-data-to-a-list","aria-hidden":"true"}},[this._v("#")]),this._v(" Append the Data to a List")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("Now we want to make a list of dogs. The easiest way to do this is to loop over an array and append data to a list. Our "),s("code",[e._v("dogs")]),e._v(" are an array, so it's ready to be appended. To render a list of items based on an array Vue has a "),s("code",[e._v("v-for")]),e._v(" directive, which will iterate through this array and render each item. Let's add this directive to our "),s("code",[e._v("v-flex")]),e._v(" element in "),s("code",[e._v("Pets.vue")]),e._v(":")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('<v-flex xs12 sm4 md3 v-for="pet in dogs" :key="pet.breed">\n')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You can see now we have eight "),t("code",[this._v("v-card")]),this._v("s with the same text and image. Let's fix that!")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Inside the "),t("code",[this._v("v-for")]),this._v(" directive our "),t("em",[this._v("current")]),this._v(" dog will be called a "),t("code",[this._v("pet")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("💡")]),t("p",[this._v("Remember, we chose this name inside the directive; if we had written "),t("code",[this._v('v-for="dog in dogs"')]),this._v(" each item will be called "),t("code",[this._v("dog")]),this._v(").")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Checking the "),t("code",[this._v("dogs.js")]),this._v(" file we can see each dog has 3 properties: name, breed and img. Let's display the image inside the "),t("code",[this._v("v-card-media")]),this._v(" component.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("But if we simply replace "),t("code",[this._v("src")]),this._v(" value with "),t("code",[this._v("pet.img")]),this._v("...")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('<v-card-media src="pet.img" height="170px">\n')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("We will have no pictures. Why? Because we're trying to pass a static value, some file called "),t("code",[this._v("pet.img")]),this._v(" and there is no such file in this data. To bind attributes dynamically we need a "),t("code",[this._v("v-bind")]),this._v(" directive or its shortcut "),t("code",[this._v(":")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('<v-card-media :src="pet.img" height="170px">\n')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("💡")]),t("p",[this._v("The "),t("code",[this._v("v-bind")]),this._v(" directive dynamically binds one or more attributes, or a component prop to an expression. That little "),t("code",[this._v(":")]),this._v(" makes all the difference!")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("<h3>{{pet.name}}</h3>\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The only thing left is the dog's breed. Let's add one more "),t("code",[this._v("<p></p>")]),this._v(" tag right below the name and display breed there:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("<p>{{pet.breed}}</p>\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Everything works nicely but our template is getting a little bulky. We can refactor and trim it down. Let's create a "),t("code",[this._v("Dog")]),this._v(" component and pass the current pet to it with a prop.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("💡")]),s("p",[e._v("Props are custom attributes you can register on a component. When a value is passed to a prop attribute, it becomes a _prop_erty on that component instance. In our case the "),s("code",[e._v("Dog")]),e._v(" component will have a "),s("code",[e._v("dog")]),e._v(" property, passed from its parent "),s("code",[e._v("Pets")]),e._v(" component.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"refactor-the-template-create-a-prop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#refactor-the-template-create-a-prop","aria-hidden":"true"}},[this._v("#")]),this._v(" Refactor the template - create a Prop!")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Create a new folder inside the "),t("code",[this._v("src")]),this._v(" and name it "),t("code",[this._v("components")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Inside the components folder we will create a new file and name it "),t("code",[this._v("Dog.vue")]),this._v(". Open this file and add "),t("code",[this._v("<template></template>")]),this._v(" and "),t("code",[this._v("<script><\/script>")]),this._v(" tags. Now our file looks this way:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("<template>\n\t\n</template>\n\t\n<script>\n\t\n<\/script>\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Copy the whole "),t("code",[this._v("v-card")]),this._v(" component from "),t("code",[this._v("Pets.vue")]),this._v(" and paste it inside the template tag. You can delete it from "),t("code",[this._v("Pets.vue")]),this._v(".")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("As mentioned above, we will have a "),s("code",[e._v("dog")]),e._v(" property in our "),s("code",[e._v("Dog")]),e._v(" component. Let's add a "),s("code",[e._v("props")]),e._v(" option to our component. First, we need to create an export statement inside our "),s("code",[e._v("script")]),e._v(" tag (so later we will be able to import our "),s("code",[e._v("Dog")]),e._v(" component inside the "),s("code",[e._v("Pets")]),e._v(" one). Add this "),s("code",[e._v("<script>")]),e._v(" block to "),s("code",[e._v("Dog.vue")]),e._v(":")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("<script>\n   export default {\n  \n   }\n<\/script>\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Now we can add "),t("code",[this._v("props")]),this._v(" option to this object and a prop "),t("code",[this._v("dog")]),this._v(":")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("<script>\n\texport default {\n\t  props: {\n\t    dog: {\n\t      type: Object\n\t    }\n\t  }\n\t};\n<\/script>\n")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("In our template in "),s("code",[e._v("Dog.vue")]),e._v(" we should replace "),s("code",[e._v("pet")]),e._v(" with "),s("code",[e._v("dog")]),e._v(", because we don't have any "),s("code",[e._v("pet")]),e._v("s inside the "),s("code",[e._v("Dog")]),e._v(" component, only a passed "),s("code",[e._v("dog")]),e._v(" property. Now our template should look the following way:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('<template>\n\t<v-card color="grey lighten-2">\n\t  <v-card-media :src="dog.img" height="170px">\n\t  </v-card-media>\n\t    <v-card-title>\n\t      <div>\n\t        <h3>{{dog.name}}</h3>\n\t        <p class="breed">{{dog.breed}}</p>\n\t      </div>\n\t    </v-card-title>\n\t</v-card>\n</template>\n')])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("Now let's move back to our "),s("code",[e._v("Pets.vue")]),e._v(" component and make some changes. First of all we should import our newly created "),s("code",[e._v("Dog")]),e._v(" component in to "),s("code",[e._v("Pets.vue")]),e._v(". Add this string after the "),s("code",[e._v("Dogs")]),e._v(" import statement:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('import Dog from "../components/Dog.vue";\n')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Now we have to 'explain' to the "),t("code",[this._v("Pets")]),this._v(" component that it has a child component inside it. Vue uses a "),t("code",[this._v("components")]),this._v(" option for this. Let's add a component option above the "),t("code",[this._v("data()")]),this._v(" one:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("export default {\n\t  components: {\n\t    appDog: Dog\n\t  },\n\t  data() {\n\t    return {\n\t      dogs: Dogs\n\t    };\n\t  }\n\t};\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("💡")]),t("p",[this._v("For each property in the components object, the key will be the name of the custom element, while the value will contain the options object for the component")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("💡")]),s("p",[e._v("For the component name you can either use a camel-case ("),s("code",[e._v("appDog")]),e._v(") or kebab-case ("),s("code",[e._v("'app-dog'")]),e._v("). Keep in mind that a camel-case name will be 'translated' to kebab-case in HTML tag names. So we will use the HTML custom tag "),s("code",[e._v("<app-dog>")]),e._v(" and it will render a "),s("code",[e._v("Dog")]),e._v(" component")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("In "),t("code",[this._v("Pets.vue")]),this._v(", place our custom tag in the space where you deleted the card earlier:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('<v-flex xs12 sm4 md3 v-for="pet in dogs" :key="pet.breed">\n   <app-dog></app-dog>\n</v-flex>\n')])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("Now we have to pass a "),s("code",[e._v("dog")]),e._v(" prop to our "),s("code",[e._v("Dog")]),e._v(" component. It will be done with the familiar "),s("code",[e._v("v-bind")]),e._v(" directive (remember, you can use its "),s("code",[e._v(":")]),e._v(" shortcut). Edit the code you just added to "),s("code",[e._v("Pets.vue")]),e._v(":")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('<v-flex xs12 sm4 md3 v-for="pet in dogs" :key="pet.breed">\n  <app-dog :dog="pet"></app-dog>\n</v-flex>\n')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("You should now have a super card layout of dogs! Chapter 2 is completed!")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"final-result"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#final-result","aria-hidden":"true"}},[this._v("#")]),this._v(" Final result")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:s(58),alt:""}})])}],i=s(0),n=Object(i.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),s("table",[e._m(1),s("tbody",[e._m(2),s("tr",[e._m(3),s("td",[e._v("A modern browser like Chrome. If using Chrome, download Chrome DevTools for Vue.js. An account in CodeSandbox.io. If you get lost, import the starting point for this chapter "),s("a",{attrs:{href:"https://github.com/VueVixens/projects/tree/master/chapter-1-end",target:"_blank",rel:"noopener noreferrer"}},[e._v("here")]),e._v(". Instructions on how to do this are in "),s("router-link",{attrs:{to:"appendix_1.html"}},[e._v("Appendix 1")])],1)]),e._m(4)])]),e._m(5),e._m(6),s("p",[e._v('At this point, we have only a home page, but we want to add one more page to contain pet cards. Let\'s create a single-page application with a navigation bar listing "home" and "pets". Clicking on the "pets" page will bring us to the new page we\'re creating now.')]),e._m(7),e._m(8),e._m(9),e._m(10),e._m(11),e._m(12),e._m(13),e._m(14),e._m(15),e._m(16),e._m(17),e._m(18),e._m(19),e._m(20),e._m(21),s("p",[e._v("Great, now we have separate components for our home and pets pages! You'll notice however that the content doesn't yet show up in the app. We have to make routes for these pages.")]),e._m(22),e._m(23),e._m(24),e._m(25),e._m(26),e._m(27),e._m(28),e._m(29),e._m(30),e._m(31),e._m(32),s("p",[e._v("To make our navigation easier we will create a simple navigation bar using Vuetify, which we already implemented in Chapter 1.")]),e._m(33),e._m(34),e._m(35),s("p",[e._v("Ok, fine, but there are no pets, so let's add some!")]),e._m(36),e._m(37),e._m(38),e._m(39),e._m(40),e._m(41),e._m(42),e._m(43),e._m(44),e._m(45),e._m(46),e._m(47),s("p",[e._v("To properly loop and append, you need to provide a unique key attribute for each item. In our case, the dog's breed will be the key.")]),e._m(48),e._m(49),e._m(50),e._m(51),e._m(52),e._m(53),e._m(54),e._m(55),e._m(56),s("p",[e._v("Now it works!")]),s("p",[e._v("Now we have to display the dog's name. For text, Vue uses "),s("em",[e._v('"mustache" syntax')]),e._v(" - double curly braces like these: "),s("code",[e._v(e._s())]),e._v(". The mustache tag will be replaced with the value of the binded property. Edit the "),s("code",[e._v("<h3>")]),e._v(" tag to use curly braces and place the dog's name:")]),e._m(57),e._m(58),e._m(59),e._m(60),e._m(61),e._m(62),e._m(63),e._m(64),e._m(65),e._m(66),e._m(67),e._m(68),e._m(69),e._m(70),s("p",[e._v("Here we are also specifying the type of our dog - it will be a JavaScript object.")]),e._m(71),e._m(72),e._m(73),e._m(74),e._m(75),e._m(76),e._m(77),e._m(78),e._m(79),e._m(80),e._m(81),e._m(82),e._m(83),e._m(84),e._m(85)])},a,!1,null,null,null);t.default=n.exports}}]);