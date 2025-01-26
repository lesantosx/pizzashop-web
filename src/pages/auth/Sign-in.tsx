import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router'
import { useMutation } from '@tanstack/react-query'
import { z } from 'zod'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { sigIn } from '@/api/sign-in'

const signInForm = z.object({
  email: z.string().email()
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset
  } = useForm<SignInForm>()
  
  const { mutateAsync: authenticate } = useMutation({
    mutationFn: sigIn,
  })

  async function handleSignIn(data: SignInForm) {
    try {
      await authenticate({ email: data.email })

      reset()
      toast.success('Enviamos um link de autenticação para seu e-mail.', {
        action: {
          label: 'Reenviar link',
          onClick: () => handleSignIn(data)
        }
      })
    } catch {
      toast.error('Algo deu errado, tente novamente.')
    }
  }

  return (
    <div>
      <Helmet title="Login" />
      <div className='p-8'>
        <Button
          variant='ghost'
          className='absolute top-8 right-8'
          asChild
          >
          <Link to='/sign-up'>
            Novo estabelecimento
          </Link>
        </Button>        

        <div className='w-[350px] flex flex-col justify-center gap-6'>
          <div className='flex flex-col gap-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>
              Acessar painel
              </h1>
            <p className='text-sm text-muted-foreground'>
              Acompanhe suas vendas pelo painel do parceiro
              </p>
          </div>
          <form onSubmit={handleSubmit(handleSignIn)} className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='email'>Seu e-mail</Label>
              <Input
                id='email'
                type='email'
                {...register('email')}
               />
            </div>

            <Button
              type='submit'
              className='w-full'
              disabled={isSubmitting}
            >
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}