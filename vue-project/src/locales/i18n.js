import { createI18n } from 'vue-i18n'

 const i18n = createI18n({
  locale:"es",
  messages :{
    en:{ "MyComponent":'My Component',"ClickMe" :"Click me!",
    },
    es:{"MyComponent": "Mi componente","ClickMe" :"¡Haz click!"
    },
    fr:{"MyComponent": "mon composant","ClickMe" :"¡Cliquez sur!"
    },
    zh:{"MyComponent": "b̴̴̫̼̟̼̫͚̐̽͐͑͐͘o̵̵̡̡̺̘̦̺̾̈́͒͐͊͝t̴̵͓̦͕͙̦͕̽͐̓̓̚͝e̸̴̡͚̠̦̟͌̿͑͘͝͝ĺ̸̸̢̝͔̫̦̓̓́̚͜l̸̸̡̟͚͉͔̈́̐̈́̓̕͘ä̸̵̫̫̘̻͍͙́͐̀͋́"}
  }
})


export  default  i18n;