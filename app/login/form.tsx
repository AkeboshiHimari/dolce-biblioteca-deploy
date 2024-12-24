import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { login } from './actions'

export async function LoginForm({
  className,
  searchParams,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  searchParams?: { next?: string }
}) {
  const params = searchParams ? await searchParams : { next: '/' }
  const next = params.next ?? '/';
  
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card className="bg-muted">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">로그인</CardTitle>
          <CardDescription>
            계정이 없다면 가입이 진행됩니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={login}>
            <input type="hidden" name="next" value={next} />
            <div className="grid gap-6">
              <div className="flex flex-col gap-4">
                <Button variant="default" className="w-full" type="submit">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-label="Google logo">
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>
                  Google 계정으로 계속하기
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
        계속하면 <a href="/privacy">개인정보 처리방침</a>에 동의하는 것으로 간주합니다.
      </div>
    </div>
  )
}