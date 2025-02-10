'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"
import { Link } from 'react-router-dom'

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(32, { message: "Password cannot exceed 32 characters" })
})

const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const isLoading = form.formState.isSubmitting

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Add your login logic here
      console.log(values)
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
    } catch (error) {
        console.log(error)
      form.setError("root", {
        type: "manual",
        message: "Invalid credentials",
      })
    }
  }

  return (
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(onSubmit)} 
        className="space-y-6 max-w-md w-full mx-auto p-8 "
      >
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-medium text-gray-700">Email</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Example@email.com" 
                    {...field} 
                    disabled={isLoading}
                    autoComplete="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-slate-50"
                  />
                </FormControl>
                <FormMessage className="text-sm text-red-600" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between items-center">
                  <FormLabel className="block text-sm font-medium text-gray-700">Password</FormLabel>
                  <Link
                    to={"/forgot-password"}
                    className="text-xs font-medium text-blue-700 hover:underline hover:font-semibold"
                  >
                    Forgot password?
                  </Link>
                </div>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                    disabled={isLoading}
                    autoComplete="current-password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-slate-50"
                  />
                </FormControl>
                <FormMessage className="text-sm text-red-600" />
              </FormItem>
            )}
          />
        </div>

        {form.formState.errors.root && (
          <p className="text-sm font-medium text-red-600">
            {form.formState.errors.root.message}
          </p>
        )}

        <Button 
          type="submit" 
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : "Sign in"}
        </Button>
      </form>
    </Form>
  )
}

export default LoginForm