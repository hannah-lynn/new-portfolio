(this["webpackJsonpportfolio-site"]=this["webpackJsonpportfolio-site"]||[]).push([[0],{14:function(e,t){function s(e){localStorage.setItem("theme",e),document.documentElement.className=e}e.exports={setTheme:s,keepTheme:function(){localStorage.getItem("theme")?"theme-dark"===localStorage.getItem("theme")?s("theme-dark"):"theme-light"===localStorage.getItem("theme")&&s("theme-light"):s("theme-dark")}}},32:function(e,t,s){},33:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},44:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(23),l=s.n(n),r=(s(32),s(9)),o=s(2),i=s(14),d=(s(33),s(0));var m=function(){return Object(d.jsxs)("div",{className:"flex flex-col mt-24 m-auto w-4/5",id:"about",children:[Object(d.jsx)("h1",{className:"font-bold text-xl mb-4",children:"About Me"}),Object(d.jsxs)("p",{className:"text-left",children:["I'm a self taught developer from Manchester, UK. I started teaching myself HTML, CSS, and Javascript in 2019, when I was in New Zealand, and was really happy to start a full time developer role in October 2020.",Object(d.jsx)("br",{}),"Currently, I work frontend with Angular and Typescript and backend with PecoTS and MySQL. I enjoying coding in my spare time, where I build things, like this website, using React. I'm constantly looking for new things to learn and better ways to write my code, that's part of why I love coding.",Object(d.jsx)("br",{}),"Previously, I worked in retail management, for Tesco in the UK and Urban Outfitters in Berlin, Germany. I learnt a lot here about customers, growing business, working to targets and leading teams.",Object(d.jsx)("br",{}),"I'm also a volunteer for Care4Calais, a volunteer run refugee charity where I help give direct aid to asylum seekers in the UK. In my spare time I like to grow plants and write long lists of ideas for things to code."]})]})};s(35);var h=function(){return Object(d.jsxs)("div",{className:"flex flex-col justify-center my-10",id:"contact",children:[Object(d.jsx)("h1",{className:"font-bold text-xl mb-4",children:"Contact"}),Object(d.jsx)("div",{className:"form-card flex justify-center",children:Object(d.jsxs)("form",{action:"submit",className:"flex flex-col text-left w-full md:w-1/2 lg:w-1/3 mx-4",children:[Object(d.jsx)("label",{htmlFor:"name",className:"name ml-1 font-bold",children:"Name"}),Object(d.jsx)("input",{type:"text",className:"name my-2 rounded-xl p-2 focus:outline-none"}),Object(d.jsx)("label",{htmlFor:"email",className:"email-label ml-1 font-bold",children:"Email"}),Object(d.jsx)("input",{type:"email",className:"email-input my-2 rounded-xl p-2 focus:outline-none"}),Object(d.jsx)("label",{htmlFor:"message",className:"message-label ml-1 font-bold",children:"Message"}),Object(d.jsx)("textarea",{name:"message-area",id:"message-area",cols:"30",rows:"5",className:" my-2 rounded-xl p-2 focus:outline-none"}),Object(d.jsx)("div",{className:"btn-container flex justify-center",children:Object(d.jsx)("button",{className:"submit-btn mt-2 py-2 px-4 items-center rounded-lg cursor-pointer",children:"Submit"})})]})})]})};s(36);var A=function(){return Object(d.jsx)("div",{className:"flex justify-center my-10",children:Object(d.jsx)("p",{className:"text-center pb-4",children:"Made with \u2764 by Hannah"})})},b=s(12),j=s(27),x=(s(37),s.p+"static/media/quokka.da49fcf2.png"),u=30,f=170;var g=function(e){var t=e.messages,s=Object(a.useState)({text:"",message:"",isDeleting:!1,loopNum:0,typingSpeed:f}),c=Object(j.a)(s,2),n=c[0],l=c[1];function r(e){return e.isDeleting?u:f}return Object(a.useEffect)((function(){var e="";return function t(){l((function(e){return Object(b.a)(Object(b.a)({},e),{},{text:(t=e,t.isDeleting?t.message.substring(0,t.text.length-1):t.message.substring(0,t.text.length+1)),typingSpeed:r(e)});var t})),e=setTimeout(t,n.typingSpeed)}(),function(){return clearTimeout(e)}}),[n.isDeleting,n.typingSpeed]),Object(a.useEffect)((function(){n.isDeleting||n.text!==n.message?n.isDeleting&&""===n.text&&l((function(e){return Object(b.a)(Object(b.a)({},e),{},{isDeleting:!1,loopNum:e.loopNum+1,message:(s=e,a=t,a[Number(s.loopNum)%Number(a.length)])});var s,a})):setTimeout((function(){l((function(e){return Object(b.a)(Object(b.a)({},e),{},{isDeleting:!0})}))}),500)}),[n.text,n.message,n.isDeleting,t]),Object(d.jsxs)("div",{className:"hero",id:"home",children:[Object(d.jsx)("div",{className:"half-container",children:Object(d.jsx)("img",{src:"data:image/png;base64,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",alt:"green half circle with red dot",className:"red-dot"})}),Object(d.jsx)("div",{className:"change m-auto mt-20 main flex items-center justify-around rounded-lg",id:"main",children:Object(d.jsxs)("div",{className:"main-text flex w-full justify-center space-x-2 sm:space-x-6 md:space-x-24",children:[Object(d.jsxs)("div",{className:"cta-info flex flex-col justify-center ",children:[Object(d.jsxs)("h2",{className:"text-2xl md:text-3xl flex flex-col md:items-start",children:["Hello,",Object(d.jsxs)("div",{className:"message",children:[Object(d.jsx)("span",{children:n.text}),Object(d.jsx)("span",{id:"cursor"})]})]}),Object(d.jsx)("div",{className:"items-center mr-4 mt-6",children:Object(d.jsx)("a",{className:"contact-btn py-2 px-4 items-center rounded-lg cursor-pointer",href:"/new-portfolio/#contact",children:"Contact"})})]}),Object(d.jsx)("img",{src:x,alt:"A quokka and I",className:"quokka"})]})}),Object(d.jsx)("div",{className:"half-container",children:Object(d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAABWCAYAAADWvpqJAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAD8RJREFUeJztnXt0HOV5h5/3W2lX+FabmKu5Hk7ICdCWhEtI0hwOaZJToJBDCIK22EZaLeISfFI7MbYhZSjWriSHQPCBgo0xBkIDHC4plzRQSkJSLi1gMAQOxmBsWdiAbYzxTdLuvP1DyJZlSdbOfDOzI83zl6Td7/f+NLvv7LffzPe+wqI5Dqr7UD5/ATK67FGqo4AvlD1OJAU6qexx3YMngab7fSi1fQJ1N27yJKsqLJpdABEPg/cFU+Mh6lhUx5c9SjQDcoCHeABHDvjIuBVV1D5Q8qS62Kmh1HGtR08HgKQ8jJuA6piyRxlGoUz0EK8KOLTfR5QtVajWD/iEvaLlD/HwVvUcayhjO8d3+hAG5EqP4/D8P3k6hp4P/OCcd7/rWTu1JUWpeqb34CEePz9vv4EQPjQI6wKQjg8TKHoeKxLEyxIv/ByDmjFdFp3EEP3YoDqyE5A/e5s+7cLb9HVYIBv9jfd97OPOxwbk7ahdRIbIZs/fX3aiy+yYiSPu//oaXvtACWSbJTPxQ3nVoOaVqH1EhrrP+Rcx/+NfI6aIedG/iFrQiCnC6wZKy6P2ERk23kDCqxacxBNX37CgMnJPYLDCkJLVUbuIjJK+5FujWHrLgpN4kuJN3xrq+n8N4kq1rDbU5deDj5XAOFNdtPDi7/Ouf42YIpn3/Ivoy/414oh0MqWw0Xy+jPxY1HZCR8Vl1eiPfOs0OtuANv+GYscq6pwdvlXaR31gwUsM0YcR1HT/rL+O2E34iPskjuNaUltiSSc+iNxpRaf7NXjKilas0AcBuhMwJf8dqZcocM1N1rRUHrCmFReMxZO2ujdb04oNHU9DTwLWFz4GRtZ3mZrOZ61ptaffAPF5S1uckE5WZeytnhsdYR8A8g4NN2yEngQEQPNR2QkffYEpP99qTc5xXERvsaZX6YjeYnH6DtnWz0BfsKZX6agWen7clYCpHQ9FYiYKjMyyrtlVHEkJON+6pqn6mXXNSmX7lgd7ftyVgHU3bgK9OxJDYaJsYXXmj9Z1L5n3DmDjwnRlI7xJfbOFyw99GPP2MyhbrOtWGsq9TJu/uedX0+fhfw3ZTgToDKvTp96ITAtEt5IQLgtEt/ueXB9bk2JCSnf7pN89ARuaVwzvubh0sn1rcJcM2tJ/AD4MTD962gKZPfTw2Y47Gd43hTzTd/bQ9xMQtOofQ7MTNkKOafM7AtN3HBdMbWD6UaOmNrDZA8D0G7aDXBqYftQYM3WPP+3xpNzclcPzu6BsZOzxvwo8TEPTs8BwvMN/Kbmm4GdH495ZDLo+8Djhs4T6pj3umNozAQHEvXzYXdcq6RnU1oa0AdScH06cEKk2Z4USp/aBEpI6J5RYYSHsIN11eX8P9Z+A2dbPKJV+EKipUNHbaSyE96nU0LQKZHpo8QJHr2BqU3to4bJNf0JYHFq8oJHUWQNdd+4/AQEaWx4H+U1gpkJD1zOupt+zT6CsSf8SsbBdJ3JkGWtqwr/GuXXLpQyHch/KQ9TP/a+BHh44AQHGpWuBVbY9hUvqRGqd8KfTjuNSdL8R72tbso3UtlMDXXgZiGnzOyilTgw9rl1W4h5xwWBPGDwBa51OSp0nxvb7oHJm93QwIhpbPiXNCZHF90tRT/JcM9UGjXPfBffsyOL7o4jhazQ2Dlr5bfAEBGi8fj1SOtmarbAQmUmu8ETUNphaWI5o/L5PC9/nkkL0U+iGlkcxMidqG2Wh4qJywuebHAZl7wkIkG15DSPxOZOrXkc2Py9qGzvJNj8MGp/rgyqTyRb+I2obO6nPF+KVhMVvkssPqVpeeTWCF8w6CTEvIDq0xI0CZTa5QnPUNvpl4azzEanszc8pzqWuUJk35t8++2rguqhtDIiKS4qTqM8PudJg+UW6F848BDFLQbzUyQ+WSn7z9LBw5pcxqVdQvPSFCBDpRIunkmut7FsRF8w5HaPRf7XYk0106Ve4tPn9cgaV/0mWa11DqeZwKupuD9mIy5cqPvkAcq1vIRxGZa0uv0spPanikw/g4vxvcfkSIpv3/uSQUH2OUmZSuckHfjp2KMLtc/4JWBLplFRYzNjMJZFcavCD4xgO67wSN+KN0EKesSv+xX+F8JC56YoMo8f8G0pdtEZkOtmmG732yPDfMucuZ386Ou5HONW3Vnm0gfkhDU3+yqNHza0//SLVVY+gHBNy5FdBz+veARNjFs48BVIPIRwUcuSnSGcuZIrjq7KevZ5VC2d+GUndCxxvTbNfZBtKI+3peyO5QBwUC2eegqR+DRweaBzhI0pyERfn/5Ngmm6Fj6qw8Kq/w+i9QPm9E8tjOVqaamu6br9p3ILZR5NiVgBTgxcR8xPaqp8bVonXm+6Gn8eDuQ70TLvi8jhSuor6lmXIMEm8vtx/XorNR38T3Fbga1a1hcWo5m3PGALq2gj84p/3YXzNybh6IZgpA3aoHZynEb2Z7fIsPypssO6xkrnHGcf2jr/BUIfyQ28i8gBibofO57sLH40gbpsxkVT1aSA54LseFIqgdyKpJZjql6wUIe6H4BKwN6rCoukTkPShuFXHIO5RCF9AZSIwFnXXYliHyjrUvAa6kvb0BhxnOO+OHjqOYziIfanqOgJ1j0XkSFz2xehEXDIY1qKsA/0ASS2jyl3Jyswnw3amUC7POFW8v3UixfQRiB4HejiqEzEyERVFdS0pWUeJNmAZXW4blxY2JQ1YExISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIS+iIsuvp7lNzUrr+448BUl6+ko0FGlT1ONYMwoexxYEAO9DAO0P1RMgB0Zv6eyx1v5eN7dmL3RmQ8aGqAEYOJjUWk/Epp6o5CZFzZ41ytxpj9yh7XHXQS+nlBr/bMtz1ve7rt4mpk4nd2/i4qIPt60jJMQKkqf6COBUaXP4waxINXVQNMAkDoqMIt3YnpXU9D8F6pwMM4XzsSfWzX6ok7dot3kWuvFQ7pWyLPzxYyL8fP4wE0fl5ndh2/a65RHMebRvHgDJkOO8cv7J174jHo7i/XKoOwzoqhuLKpw/um32TDK742rZY2DNo3YdgjfGSAtVH7iJQDv+Vv132sux/5xO//7vfYxx3lY4MS77J0fhB2+O6aK/zZkpv4ITrkEuz90n3sR3ISvmkQ/B3EOKPqv6aoq89ZcBJTxEJpPn3Jv0ZMUXnNoKW3o/YRHRbeQGJG7gnM1SF1ABoc+ZN/jZji6jsGw+qofUSHjbOv+5Z/jZhiLLTg1hH8CZgurjK0jRq5q6Bp9d9gZvvWdyw4iSfp4nLfGm7VyExAFZdVoz8yny+lPxO1n0ioOaHdt8a0+ZuB6No4R4ZsZMrPt/qWObqqkrpEhYe4T+I4bvfdDMqvIrYTBS/6XgHtQbnLik6cELXzP5/mFBH+z4pWnFC5H3r6A7ruU5GaiQS50ZqUobK73gaCsXfSVm62phUXTOl30JOAjS2rEXy1WYodne7vrGkVN7yEysi6K6b48WvWtKp5zJpWLND1ZFs/gN4dclUqs696MCznsuZPrKk1LuhCuNeaXsWjd9O4wN5tZFMLGxALK6pxQaWp58ddCZjq+vdIzESB6CzrmoYbrGtWKqLXByB6rX3NCiWT2Xmy3pWAdfPWMRJWQ1Vc2moet65bn1+K4n9VtdJR1pJtsXABvg/Fwx9mZNyW9nTvrrq793Y38pPQ7YSN6DU4gfSTV+DHAehWFsJlBLH5p7GxC9k1NRu2iDuj96+7J2B9finwbph+Qqcmc1Ng2u6G34BsC0w/akQ2c1QmuAWTDveXgWlXAsKbfWcPps9TFNXzQ7QULkbmcKGzOTD9xgVd4F4UmH7k6GROC7Bp6mXNn6B6XWD6UVN0L6DP7KFvAkKu+WXg6ZAshYh0suWzXwQeZk3Ng0Bb4HHCp436/KOBR9m+tQkhkHbQ0aLP0tjyet+/7pmAACWZHLifsBH3AqbN7wg8juO4qJ4TeJywEfesUFo2T5vfgasXBR4nbNI15/X35/4TsDG/FuWyQA2FifIHss2PhBYv1/wyKvNDixc0qreSbbF34X1v5JrvY1jNwjTbe+WzN/0nIEBD/lZgaVCWQqTIPpmzCbtsj7t+xjC5u+hD3I3TQo9acs9lOFyWUF4mW1g80MMDJ6CIksp8O/aremq+FejCy0A0LuhC9Ouhx7WJiosxJ1m962WoNLZ8iqa+G3pcmyhbMKXTBpu6D5yAAHXOJlz9inVjYSEyk1yThbIJHqlvfg/lzMji+8WY06lvim5BKTf394iE/+lrjdLJZFs/G+wZgycgwMWF5aQ415qnsBAWk83Pi9oGucITqF4dtY2yUWaTnftk1DbI5ueD3h21DQ+cQ651r9US9p6AAHWFh1C9wLel8LiP+nw2ahM7yTU3AT+L2kYZzCVXqJyb87OFqcCSqG0MGZGpNBSGtOg3tASEnpWpKV49hYfcQzb/D6EsmZdDQ2EuMDdqG3tF1KGhUFknCxElm69DqPwNA65eSDY/5M3K5dc1XzjzFCT1R/BShz9gVK8j13wN4RcqHzq3zzoPundDVxwqk8nl74naxiAId8yZhav5qI3sgYoL5m/Jzf19OcO8NRZY5BwMHUtR9vc03jYqLuhZ5ApP7P3JFcCiK/8azAso5TdjCQTZhvJ1cnn7uxyCYOHsMxDs72jxzodI6as9m2zLYehT0N5knQ8objgEwV5ZB8/IMuDg2CQfQLblNXZk9gOpgDeRPkq6c//YJB90L2yVMvsB/qva+WchpSMO9ZJ84LM3EQB3zPkqrj4BHOBbqzyKQAPZ/F0V932vHBbMOR3R+xHGhBpXZDNCLfV5e6U5wkZVWDS7DuQ2wv5KpLSTkrOpz/sqzOztE7A39flXWJM5GFfOILzyfK1s3jGOhsKSWCcfwMX539KemYDKZJAg9inujooLMp3i+omxTj7oXpxpaL6DbVvGgEwPKeg2VCbTnjnMb/KBjU/A3jhOFZM6vodhHsoxVrVFNoN7JTtq7vHcULPSWezUUOw6B9zrkd49Gy2gtIPOYPvWR0K5KT0KFs0ciytTMKk8quU3LR0M4U1EprM6/TSOvS1ZdhOwN3dcdShu6fsgVwBHe1TZhHALrtxHe/qNEdSPT1gy+4t08gNgmudkVNZi5Aa6uh7hknkrqOTVYZs4juHQ7X+Jps4HvRQY71FpOaI34LqPkWtdY9NiD8ElYG9udsZQXTqcVOlY4GRU/wrkAEQPRGU86PtAG+hKVF5AdRmd8h4/KmwIxV+ls/jH4ynVHImaYzF6Ci7HYdgPlQNRTWNYjbIGZAXK85jS6xR5n8aWT6O2XhHcNmMipI/CcBwi30D1KEQORvUghCLIatA1CMtBnqdL32DUvquY8lP/lb/3wv8DobET+mDYxMsAAAAASUVORK5CYII=",alt:"green half circles",className:"half"})})]})},p=(s(38),s(13)),O=(s(39),function(){return Object(d.jsx)("div",{className:"mode-toggle flex items-center mr-4",children:Object(d.jsx)("div",{className:"flex items-center justify-center w-full mb-12",children:Object(d.jsx)("label",{htmlFor:"toggle",className:"flex items-center cursor-pointer",children:Object(d.jsxs)("div",{className:"relative",children:[Object(d.jsx)("input",{type:"checkbox",id:"toggle",className:"sr-only",onClick:function(){"theme-dark"===localStorage.getItem("theme")?Object(i.setTheme)("theme-light"):Object(i.setTheme)("theme-dark")}}),Object(d.jsx)("div",{className:"toggle-area block w-14 h-8 rounded-full"}),Object(d.jsx)("div",{className:"dot absolute left-1 top-1 w-6 h-6 rounded-full transition"})]})})})})});var v=function(){return Object(d.jsx)("nav",{children:Object(d.jsxs)("div",{className:"flex justify-between mt-4",children:[Object(d.jsxs)("div",{className:"nav-links flex ml-4",children:[Object(d.jsx)("div",{className:"ml-2 p-2",children:Object(d.jsx)("img",{className:"wavy",src:"data:image/png;base64,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",alt:"wavy lines"})}),Object(d.jsxs)("ul",{className:"cursor-pointer hidden md:flex items-center ml-2 space-x-12",children:[Object(d.jsx)(p.a,{className:"p-4 hover:text-green-500 flex-row",to:"/new-portfolio/#home",children:Object(d.jsx)("li",{children:"Home"})}),Object(d.jsx)(p.a,{className:"p-4 hover:text-green-500 flex-row",to:"/new-portfolio/#about",children:Object(d.jsx)("li",{children:"About"})}),Object(d.jsx)(p.a,{className:"p-4 hover:text-green-500 flex-row",to:"/new-portfolio/#projects",children:Object(d.jsx)("li",{children:"Projects"})})]})]}),Object(d.jsx)("div",{className:"items-center mr-4 mt-4",children:Object(d.jsx)(O,{})})]})})},I=(s(44),s.p+"static/media/essay-ss.71b1483f.png"),N=s.p+"static/media/plant-shop.ff21bd4b.png",w=s.p+"static/media/calculator.da8d62b6.png",y=s.p+"static/media/countries.27c44286.png",E=s.p+"static/media/rps.e61cfa10.png",C=s.p+"static/media/tictactoe.23483865.png",T=s.p+"static/media/chat-bot.f5e837d0.png";var H=function(){return Object(d.jsxs)("div",{className:"flex flex-col my-10 m-auto w-4/5",id:"projects",children:[Object(d.jsx)("h1",{className:"font-bold text-xl my-4",children:"Projects"}),Object(d.jsxs)("div",{className:"card-container justify-center md:flex flex-wrap mt-10 w-full",children:[Object(d.jsxs)("div",{className:"card md:w-1/3 lg:w-1/4 transform hover:scale-105 flex flex-col rounded-lg shadow-2xl mb-6 mx-2",children:[Object(d.jsx)("img",{src:T,alt:"screenshot of chat bot",className:"card-img rounded-lg m-4"}),Object(d.jsx)("h2",{className:"title font-bold my-3",children:"Chat Bot"}),Object(d.jsx)("p",{className:"mx-2 flex-1",children:"This chat bot was built using Typescript, Angular with Tailwind and CSS. Please click to see a video of the bot working."}),Object(d.jsx)(p.a,{to:"/new-portfolio/chat-bot",children:Object(d.jsx)("button",{className:"projects-btn rounded-2xl mx-auto my-3 cursor-pointer bg-gray-50 p-2",children:"More"})})]}),Object(d.jsxs)("div",{className:"card md:w-1/3 lg:w-1/4 transform hover:scale-105 flex flex-col rounded-lg shadow-2xl mb-6 mx-2",children:[Object(d.jsx)("img",{src:I,alt:"screenshot of essay site",className:"card-img rounded-lg m-4"}),Object(d.jsx)("h2",{className:"title font-bold my-3",children:"Essay Site"}),Object(d.jsx)("p",{className:"mx-2 flex-1",children:"A site to display essays and link back to criteria or reference points in the essay. Made using React and React Tabs and styled with Tailwind CSS."}),Object(d.jsxs)("a",{className:"projects-btn rounded-2xl mx-auto my-3 cursor-pointer bg-gray-50 p-2",href:"https://github.com/hannahl87/essay-site",target:"_blank",rel:"noopener noreferrer",children:[" ","More"]})]}),Object(d.jsxs)("div",{className:"card md:w-1/3 lg:w-1/4 transform hover:scale-105 flex flex-col rounded-lg shadow-2xl mb-6 mx-2",children:[Object(d.jsx)("img",{src:w,alt:"screenshot of calculator",className:"card-img rounded-lg m-4"}),Object(d.jsx)("h2",{className:"title font-bold my-3",children:"Calculator"}),Object(d.jsx)("p",{className:"mx-2 flex-1",children:"A simple calculator built using HTML, CSS and Javascript."}),Object(d.jsxs)("a",{className:"projects-btn rounded-2xl mx-auto my-3 cursor-pointer bg-gray-50 p-2",href:"https://github.com/hannahl87/calculator",target:"_blank",rel:"noopener noreferrer",children:[" ","More"]})]}),Object(d.jsxs)("div",{className:"card md:w-1/3 lg:w-1/4 transform hover:scale-105 flex flex-col rounded-lg shadow-2xl mb-6 mx-2",children:[Object(d.jsx)("img",{src:N,alt:"screenshot of plant site",className:"card-img rounded-lg m-4"}),Object(d.jsx)("h2",{className:"title font-bold my-3",children:"Plant Shop"}),Object(d.jsx)("p",{className:"mx-2 flex-1",children:"A fully responsive single page website built using HTML, CSS and Javascript. Showcasing an animated nav on smaller screens."}),Object(d.jsxs)("a",{className:"projects-btn rounded-2xl mx-auto my-3 cursor-pointer bg-gray-50 p-2",href:"https://github.com/hannahl87/theplantshop",target:"_blank",rel:"noopener noreferrer",children:[" ","More"]})]}),Object(d.jsxs)("div",{className:"card md:w-1/3 lg:w-1/4 transform hover:scale-105 flex flex-col rounded-lg shadow-2xl mb-6 mx-2",children:[Object(d.jsx)("img",{src:y,alt:"screenshot of countries site",className:"card-img rounded-lg m-4"}),Object(d.jsx)("h2",{className:"title font-bold my-3",children:"Countries"}),Object(d.jsx)("p",{className:"mx-2 flex-1",children:"Using Rest Countries API you can search through to find your country of choice with Capital City and flag."}),Object(d.jsxs)("a",{className:"projects-btn rounded-2xl mx-auto my-3 cursor-pointer bg-gray-50 p-2",href:"https://github.com/hannahl87/countries",target:"_blank",rel:"noopener noreferrer",children:[" ","More"]})]}),Object(d.jsxs)("div",{className:"card md:w-1/3 lg:w-1/4 transform hover:scale-105 flex flex-col rounded-lg shadow-2xl mb-6 mx-2",children:[Object(d.jsx)("img",{src:E,alt:"screenshot of rock paper scissors game",className:"card-img rounded-lg m-4"}),Object(d.jsx)("h2",{className:"title font-bold my-3",children:"Rock Paper Scissors"}),Object(d.jsx)("p",{className:"mx-2 flex-1",children:"A cute rock paper scissors game that can be played against the computer on smaller and larger screens."}),Object(d.jsxs)("a",{className:"projects-btn rounded-2xl mx-auto my-3 cursor-pointer bg-gray-50 p-2",href:"https://github.com/hannahl87/rockpaperscissors",target:"_blank",rel:"noopener noreferrer",children:[" ","More"]})]}),Object(d.jsxs)("div",{className:"card md:w-1/3 lg:w-1/4 transform hover:scale-105 flex flex-col rounded-lg shadow-2xl mb-6 mx-2",children:[Object(d.jsx)("img",{src:C,alt:"screenshot of tic tac toe",className:"card-img rounded-lg m-4"}),Object(d.jsx)("h2",{className:"title font-bold my-3",children:"Tic Tac Toe"}),Object(d.jsx)("p",{className:"mx-2 flex-1",children:"Tic Tac Toe can is a responsive 2 player game utilising simple javascript is along with HTML and CSS."}),Object(d.jsxs)("a",{className:"projects-btn rounded-2xl mx-auto my-3 cursor-pointer bg-gray-50 p-2",href:"https://github.com/hannahl87/tictactoe",target:"_blank",rel:"noopener noreferrer",children:[" ","More"]})]})]})]})},W=s(26),k=s.n(W);s(63);var M=function(){var e=Object(o.f)();return Object(a.useEffect)((function(){window.scrollTo(0,0)})),Object(d.jsxs)("div",{className:"flex flex-col text-center m-6 lg:m-10",id:"chat-bot",children:[Object(d.jsx)("h1",{className:"font-bold text-xl mb-4",children:"Chat Bot"}),Object(d.jsx)("div",{className:"video-container flex flex-col justify-center items-center mt-2 lg:mt-6",children:Object(d.jsx)(k.a,{url:"https://youtu.be/W9YExAEOWn4",className:"react-player"})}),Object(d.jsxs)("div",{className:"see-more flex flex-col my-4 text-left",children:[Object(d.jsx)("p",{children:"This chat bot was built using Angular Typescript. I styled the project using Tailwind CSS and SCSS."}),Object(d.jsx)("br",{}),Object(d.jsx)("h4",{className:"font-bold",children:"Details:"}),Object(d.jsx)("br",{}),Object(d.jsx)("p",{className:"about-video",children:'The chat can be opened by pressing the "Chat Now" tab. The chat can be closed by pressing the x in the the top right hand corner of the chat window. You can also refresh the chat by pressing the arrow in the top left of the chat window. If you close or refresh the chat the previous conversation will be deleted. To talk to the bot, you can open the chat and answer their questions. If a question is asked and a button appears, you must click one of the buttons to proceed. If a number is required, you must enter a number to proceed. Once you have reached the end of the bot questions it will recommend you some holidays if your answers match any of the data. If not, you can start again. The chat can be downloaded into a text file using the save button in the bottom left of the chat. At the end of the conversation you can also type your own questions and see if the bot can help you. Why not try asking the bot their name? Or if they are hungry. You can also ask the bot something else, but they may not always have an answer, after all, they are just a bot.'}),Object(d.jsx)("br",{}),Object(d.jsx)("p",{children:"You can see more about this project"}),Object(d.jsx)("a",{href:"https://github.com/hannahl87/chat-bot",className:"project-link",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("button",{className:"here-btn mt-2 py-2 px-4 items-center rounded-lg cursor-pointer",children:"Here"})})]}),Object(d.jsx)("button",{onClick:function(){return e.push("/new-portfolio")},className:"home-btn rounded-full fixed bottom-4 right-4 p-2",children:Object(d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAMcUlEQVR42u3dbYwU9R3A8XnauQfuibvr0VAqFwQSKRFttAKHpKmKbRMbokabhmg0qU3wIeS0IX1jo33RpuQ0xlpjo+kLE2lrNCZtNTRizO0pB9WCBmmFxiIiVvDoend7tzu7O9MXdCoP97APM/+Hme/nHXfH/H//Wb653Z1l1zAAAAAAAAAAAAAAAAAAAMAs8sP9Q/nh/iHZcwCoUX64f6i0uyco7e4JiDi5TNkDIHr54f4htzQxePbXvEz7Iws2Hr1f9myIFgEnzEzxhog4eQg4QeaKN0TEyULACVFNvCEiTg4CToBa4g0RcTIQsObqiTdExPojYI01Em+IiPVGwJqKIt4QEeuLgDUUZbwh1SMu7e4JZKybuWZM6UYs2QOgNnHEaxiG4ZYmBnnFln4IWCNxxRsiYv0QsCbijjdExHohYA2IijdExPogYMWJjjdExHogYIXJijdExOojYEXJjjdExGojYAWpEm+IiNVFwIpRLd4QEauJgBWiarwhIlYPAStC9XhDRKwWAlaALvGGiFgdBCyZbvGGiFgNBCyRrvGGiFg+ApZE93hDRCwXAUuQlHhDRCwPAQuWtHhDRCwHAQuU1HhDRCweAQuS9HhDRCwWAQuQlnhDcUQs5Q2xNEDAMUtbvKGoI640tf+EiC9EwDFKa7yhKCNu2XD0F0R8IQKOSdrjDRFxvAg4BsR7LiKODwFHjHhnRsTxIOAIEe/ciDh6BBwR4q0OEUeLgCNAvLUh4ugQcIOItz5EHA0CbgDxNoaIG0fAdSLeaBBxYwi4DsQbLSKuHwHXiHjjQcT1IeAaEG+8iLh2BFwl4hWDiGtDwFUgXrGIuHoEPA/ilYOIq0PAcyBeuYh4fgQ8C+JVAxHPjYBnQLxqIeLZEfB5iFdNRDwzAj4L8aqNiC9EwP9DvHog4nMRsEG8uiHiL6Q+YOLVExGfkeqAiVdvRJzigIk3GdIecSoDJt5kSXPEqQuYeJMprRGnKmDiTbY4Ipa9p/mYsgcQhXjTw8u0P7Jg49H7Zc8hQioCJt70SUvEiQ+YeNMrDREnOmDiRdIjTmzAxItQkiNOZMDEi/MlNeLEBUy8mE0SI05UwMSL+SQt4sQETLyoVpIiTkTAxItaJSVi7QMmXtQrCRFrHTDxolG6R6xtwMSLqOgcsZYBEy+ipmvE2gVMvIiLjhFrFTDxIm66RaxNwMQLUXSKWIuAiRei6RKx8gETL2TRIWKlAyZeyKZ6xMoGTLxQhcoRKxkw8UI1qkasXMDEC1WpGLFSARMvVKdaxMoETLzQhUoRKxEw8UI3qkQsPWDiha5UiFhqwMQL3cmOWFrAxIukkBmxlICJF0kjK2LhARMvkkpGxEIDJl4kneiIhQVMvEgLkRELCZh4kTaiIo49YOJFWomIONaAiRdpF3fEsQVMvMAZcUYcS8DEC5wrrogjD5h4gZnFEXGkARMvMLeoI44sYOIFqhNlxJEETLxAbaKKuOGAiReoTxQRNxQw8QKNaTTiugMmXiAajURcV8DEC0Sr3ohrDph4gXjUE3FNARMvEK9aI646YOIFxKgl4qoCJl5ArGojnjdg4gXkqCbiOQMmXkCu+SKeNWDiBdQwV8QzBky8gFpmi/iCgIkXUNNMEZ8TMPECajs/4v8HTLyAHs6O2DQM4gV0E0ZsEi+gJy/T/oi0jxct7e4JZJ8AICqZa8aktGTJ3jiA+hEwoDECBjTmyB4AF6pY7nHDNN/0Deew6ZgfeZXmcsb2HLNc7jMN/xIj8Nfbvtcf8ZpHDdN6MzDMvwdO5mS54pYzdsEJysFXLaO80giC9bbvLZF9bnAuAlaEb9o532562mta+Gzn2nffne/nc6OXrWoqjt1hVYp3WUGlo841x32r6TfF5t7fdq3df2i+n/98dM2lbvH07ValeKcVVLpknzMI/IDv8/Es9BmBYXllp+WXk53LdvRd9vp4rX9/bO+67tbC8Yfs8vRW0wiqekgUGKZfcVp+PdX8lZ/2XDV6utY1T/1tY8eCiaPbnfL0A6bhu7LPoQpkPQtNwBL5VuZQ0e25tWPgvYONHmvyjZXfyhRzv7eCSu+ca5r2Z6Wmhbe2Dbz/WqNrjr+xanWTd/r3ll9aJfK8qYjLSCnjO+6rueYV66KI1zAMo23g8GvTTX0DvumcmHVN0zk+3dQ3EEW8hmEYHQOHDuaalq/zbTeS46F2BCxBxXZHJvuW37BoXbbmu8xz6Ro4eNhr7bkuMK3c+d8LTHu82Np7fdfAwcNRrrlo/cj45JeW31Cx3ZG4zxsuRMCC+aZzotCy+KaeS7KFOI7fvvbQIS/TdcfZj08CwzC8TOftHWvfm/eJqnr0fC07Nd28+CbftE80fjTUgoAFCgzDKLmdP+y66u2Tca7TdvWRlyp2y+/CP1fslj+0XX3kpTjXXLj27ZMlt/NHca6BCxGwQL7d/Je2DYdfFrGW19y7PTAtLzAtz2vu/bGINds2HPlTxW5+VcRaOIOABfIyHT8XtVbn2gPHfMt9zrfc5zrXHjiWxD2CgIXxrcwHI59/Y1jkmkW3+6mi2/2UyDVH89973bcyR0WumWZcBxakbLf8quWbx++VPYcI068vedypTN8jew6RuA6ccL7tZmXPIHCvb8ieIS0IWJCK0xrLJRwVVZzWSF6cgvkRsCCnuq+I9dKRStK0V9kIWJCPTizJNX4UPRz/90Wp2atsBCxIR+dUq+wZRGlvn0zNXmUjYEH6jT29jR9FD2naq2wELIibP7Vc9gzsNXkIWBA78K6QPQN7TR4CFsSslK+TPQN7TR4CFsTyvQ1jb63rkz1H3MbeWtdn+aUNsudICwIWxDQCqyV/YovsOeLWkj+xxTR8/l0JwokWyPaLdx84cG9i3wn0nXfucWy/eLfsOdKEgAWy/NKyFRMv3yx7jrgsH3/lZssvLZM9R5oQsGBOOf/QsX/ckrjfwseO/MBxyvmHZM+RNgQsmOWXVvae3LdV9hxR6/1kz1bLL62UPUfaELAEdnnqZ7nRyxfLniMqudHLv2zz21cKApbACiodTYWTT8ieIypNhVNP8lErchCwJE6lsHkye/FtsudoVD578RanMr1Z9hxpRcASuaXxx8f3rNb2dcPje1Yvy5TGE3NPQkcELJEZ+B1uYez5E+9c3yx7llp9vP87zW5h7Hkz8Ov6ZEREg4Als33vsoW5Q9r9FuseP/iE7Xtflz1H2hGwApzy1J357DJtLi3ls8u2OuWpO2XPAQJWRsYbf2xyZMW1sueYz+TIimsz3vhjsufAGQSsCNMIHNfLvTCxZ9Vq2bPMZmLPJatdL/eCaQSJeyWZrghYIWbgd7jTY698/tc1yr3II7dvzWJ3+vQrPGmlFgJWjBWUlzRPfrrrP/uvVOaFEaf3X9XVkv90lxWUl8ieBeciYAVZfml1S+7jP48dvFr6uzuefm9Da2vuoz9afknZu/ZpRsCKsv3i+tbPPnjhw303urJm+HDfjW7LyX89b/tF3mFDUQSsMKdS+Pai6b3PfvLJ94U/aXT8+BZnUWHvs45f+K7s84DZEbDi7HLhls7333xm797twm6r0dHtVvc/h5+xS4VbZO8fcyNgDWQq+dsuLex8Mpt9OPbbK5t92FpT3PlkppLX/j9apAEBa8Ip5++60nj60V27tsV2m+3atc260nz6Uaecv0v2flEdAtaI7eXv27jgxaG4jr9xwYs77GL+Ptn7RPUIWDNOMb9tKtsfecRT2f4hp5gflL0/1IaANZTxJgbzw9FFnB/u35HxJohXQwSsKbcUTcT54f4dbmniAdn7QX0IWGNuaWKwkbvTU8P9Q8SrNwLWXMarL+KpbP9QpsTdZt0RcAJkvInBqZGlVUc8lV06xGPeZCDghMgUJwenR5YO7Xywbc7bdHpk6VDGmyTehCDgBHGKk4ObN3XPGPHOB9us6ZGLhpwi8SYJASeMU8xv27ype8fZX9v5YJu1eVM313kTiIATyCnmB6eyXzwm3rypZ4dTzG+TPReix3sbJVTGmxycyvYbhmEYTpEnrJKKgBOMZ5qTj7vQgMYIGNAYAQMaI2BAYwQMaIyAAY0RMKAxAgY0RsCAxggY0BgBAxojYEBjBAxojIABjREwoDECBjRGwIDGCBjQGAEDGiNgQGMEDGiMgAGNETCgMQIGNEbAgMYIGNAYAQMaI2BAYwQMaIyAAY0RMKAxAgY0RsCAxggY0BgBAxojYEBjBAxojIABjREwAAAAAAAAAAAAAAAAAABIsf8CXp8ZK0uhujwAAAAASUVORK5CYII=",alt:"home button",className:"home items-center"})})]})},R=(s(64),["I'm Hannah","I'm a Developer"]);var Z=function(){return Object(a.useEffect)((function(){Object(i.keepTheme)(),window.scrollTo(0,0)})),Object(d.jsx)(r.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(v,{}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/new-portfolio",render:function(){return Object(d.jsxs)(a.Fragment,{children:[Object(d.jsx)(g,{messages:R}),Object(d.jsx)(m,{}),Object(d.jsx)(H,{}),Object(d.jsx)(h,{})]})}}),Object(d.jsx)(o.a,{exact:!0,path:"/new-portfolio/chat-bot",component:M})]}),Object(d.jsx)(A,{})]})})},Y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,66)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,l=t.getTTFB;s(e),a(e),c(e),n(e),l(e)}))};l.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(r.b,{basename:"/new-portfolio",children:Object(d.jsx)(Z,{})})}),document.getElementById("root")),Y()}},[[65,1,2]]]);
//# sourceMappingURL=main.42b9922a.chunk.js.map