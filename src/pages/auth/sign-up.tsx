import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router'
import { z } from 'zod'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email()
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting},
    reset
  } = useForm<SignUpForm>()

  async function handleSignIn(data: SignUpForm) {    
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      reset()
      toast.success('Restaurante cadastro com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => navigate('/sign-in')
        }
      })
    } catch {
      toast.error('Algo deu errado, tente novamente.')
    }
  }

  return (
    <div>
      <Helmet title="Cadastro" />
      <div className='p-8'>
        <Button
          variant='ghost'
          className='absolute top-8 right-8'
          asChild
        >
          <Link to='/sign-in'>
            Fazer login
          </Link>
        </Button> 

        <div className='w-[350px] flex flex-col justify-center gap-6'>
          <div className='flex flex-col gap-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>
              Cria conta grátis
            </h1>
            <p className='text-sm text-muted-foreground'>
              Seja um parceiro e comece suas vendas!
            </p>
          </div>
          <form onSubmit={handleSubmit(handleSignIn)} className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='restaurantName'>Nome do estabelecimento</Label>
              <Input
                id='restaurantName'
                type='text'
                {...register('restaurantName')}
               />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='managerName'>Seu nome</Label>
              <Input
                id='managerName'
                type='text'
                {...register('managerName')}
               />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='email'>Seu e-mail</Label>
              <Input
                id='email'
                type='email'
                {...register('email')}
               />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='phone'>Seu celular</Label>
              <Input
                id='phone'
                type='text'
                {...register('phone')}
               />
            </div>

            <Button
              type='submit'
              className='w-full'
              disabled={isSubmitting}
            >
              Finalizar cadastro
            </Button>

            <p className='px-6 text-center text-sm text-muted-foreground'>
              Ao continuar, você concorda com nossos termos de serviço e políticas de privacidade.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}