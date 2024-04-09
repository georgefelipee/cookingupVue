import type {ICategoria} from "@/interfaces/ICategoria";
import type {IReceitas} from "@/interfaces/IReceitas";

async function  obterDadosURL<T>(url: string){
    const resposta = await fetch(url);
    const dados : T = await resposta.json();
    return dados;

}
export async function obterCategorias() {
    return obterDadosURL<ICategoria[]>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/07e853b7d0626db51ce2e84bb2f15ca450b7bd7f/categorias.json');

}

export async function obterReceitas(){
    return obterDadosURL<IReceitas[]>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/07e853b7d0626db51ce2e84bb2f15ca450b7bd7f/receitas.json');



}
  