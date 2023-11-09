import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn
} from "typeorm"; //Importando funcões e arquiteturas do banco de dados com typerom.
import { Empresa } from "./Empresa";

@Entity({ schema: 'pim_unip', name: 'usuario' })
export class Usuario {

    @PrimaryGeneratedColumn()
    idempresa: number;

    @ManyToOne(() => Empresa)
    @JoinColumn({ name: 'idempresa' })
    empresa: Empresa;

    @Column({ type: 'text', nullable: false })
    email: string;

    @Column({ type: 'text', nullable: true })
    senha: string;

}
