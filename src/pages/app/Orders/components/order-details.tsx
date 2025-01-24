import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription  
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: 12345678900</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>

      <div className='space-y-6'>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className='text-muted-foreground'>Status</TableCell>
              <TableCell className='flex justify-end'>
                <div className='flex items-center gap-2'>
                  <span className='h-2 w-2 rounded-full bg-slate-400' />
                  <span className='font-medium text-muted-foreground'>
                    Pendente
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className='text-muted-foreground'>Cliente</TableCell>
              <TableCell className='flex justify-end'>
                Fulano Santos
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className='text-muted-foreground'>Telefone</TableCell>
              <TableCell className='flex justify-end'>
                (11) 12345-5678
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className='text-muted-foreground'>E-mail</TableCell>
              <TableCell className='flex justify-end'>
                teste@teste.com
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className='text-muted-foreground'>Realizado há</TableCell>
              <TableCell className='flex justify-end'>
                3 minutos
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produtos</TableHead>
              <TableHead className='text-right'>Qtd.</TableHead>
              <TableHead className='text-right'>Preço</TableHead>
              <TableHead className='text-right'>Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          
          <TableBody>
            <TableRow>
              <TableCell>Pizza Calabresa</TableCell>
              <TableCell className='text-right'>2</TableCell>
              <TableCell className='text-right'>R$ 49,90</TableCell>
              <TableCell className='text-right'>R$ 109,90</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total do pedido</TableCell>
              <TableCell className='text-right font-medium'>R$ 109,00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>

      </div>
    </DialogContent>
  )
}