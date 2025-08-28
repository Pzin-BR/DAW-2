import Curso from '../models/curso.js'; 

export default class CursoController{

    constructor (caminhoBase = 'curso/'){
        this.caminhoBase = caminhoBase

        this.openAdd = async(req, res)=>
        {
            res.render(caminhoBase + "add")
        }
        this.add = async(req, res)=>
        {
            //cria o curso
            await Curso.create
            (
                {
                    nome: req.body.nome,
                    duracao: req.body.duracao,
                    area: req.body.area,
                    nivel: req.body.nivel,
                    anoFundacao: req.body.anoFundacao
                    
                }

            )
            res.redirect('/' + caminhoBase + 'add')
        }
        this.list = async(req, res)=>
        {
            const resultado = await Curso.find({})
            res.render(caminhoBase + 'lst', {Cursos:resultado})
        }
        this.openEdt = async(req, res)=>
        {
            //passar quem eu quero editar
            const id = req.params.id
            const curso = await Curso.findById(id)
            res.render(caminhoBase + 'edt', {Curso:curso})  
        }
    }
}
