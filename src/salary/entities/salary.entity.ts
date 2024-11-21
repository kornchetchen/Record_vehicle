import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn } from 'typeorm';


@Entity('salary')
export class Salary {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column({ type: 'enum', 
    enum: [ 'CNY','USD','THB','BTC'], 
    default: 'CNY'
  })
  currency: string;

  @CreateDateColumn()
  @Column({nullable:true})
  created_at: Date;

  @UpdateDateColumn()
  @Column({nullable:true})
  updated_at: Date;

  @DeleteDateColumn({ nullable: true })
  @Column({nullable:true})
  deleted_at: Date;

  @Column({ nullable: true}) 
  deleted_by: string;
}
