import { Express, Request, Response } from 'express'; //Request e Response definem o formato dos objetos de solicitação e respostas.
import myDataSource from '../app-data-source';
import { Usuario } from '/Users/Marcela Emely/Downloads/Arquivos Backend/src/Entidades/Usuario';

export function usuarioRoutes(app: Express) {
  
  app.get("/usuario", async function (req: Request, res: Response) {
      const contratos = await myDataSource.getRepository(Usuario).find();
      res.json(contratos);
  });

  app.get("/usuario/:idempresa", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(Usuario).findOneBy({
        idempresa: +req.params.idempresa,
    });
    return res.send(results);
  });

  app.post("/usuario", async function (req: Request, res: Response) {
    const contrato = await myDataSource.getRepository(Usuario).create(req.body);
    const results = await myDataSource.getRepository(Usuario).save(contrato);
    return res.send(results);
  });

  app.put("/usuario/:idempresa", async function (req: Request, res: Response) {
    const contrato = await myDataSource.getRepository(Usuario).findOneBy({
        idempresa: +req.params.idempresa,
    });

    if (contrato) {  
        myDataSource.getRepository(Usuario).merge(contrato, req.body);
        const results = await myDataSource.getRepository(Usuario).save(contrato);
        return res.send(results);
    } else {
        res.status(404).send({ message: 'Usuario não encontrado' });
    }
  });  

  app.delete("/usuario/:idempresa", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(Usuario).delete(req.params.idempresa);
    return res.send(results);
  });
  
}
