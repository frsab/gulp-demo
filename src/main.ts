import { sayHello } from './greet';

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    const temp =elt.innerText;
    elt.innerText = temp+' '+sayHello(name);
}

showHello('greeting', 'TypeScript');