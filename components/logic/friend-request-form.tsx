'use client';

import * as z from 'zod';

import { Divide, Loader2Icon, Plus } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useToast } from '@/components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  email: z
    .string()
    .min(5, { message: 'Must be 5 or more characters long' })
    .max(50, { message: 'Must be 50 or fewer characters long' })
    .email({ message: 'Invalid email address' })
    .optional(),
});

export default function FriendRequestForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await axios.post('/api/chat/add', {
        email: values.email,
      });

      toast({
        description: (
          <div>
            <p className='text-lg font-semibold text-brand'>✉️ Request sent</p>
            <p>
              To: &rarr; <span className='font-medium'>{values.email}</span>
            </p>
          </div>
        ),
      });
      form.reset();
    } catch (error) {
      toast({
        description: (
          <div>
            <p className='text-lg font-semibold text-destructive'>
              ✉️ Failed &mdash;{' '}
              <span className='text-sm text-muted-foreground'>
                could not send request
              </span>
            </p>
            <p>
              To: &rarr; <span className='font-medium'>{values.email}</span>
            </p>
          </div>
        ),
      });
    }
  }

  const isLoading = form.formState.isSubmitting;
  const isDirty = form.formState.isDirty;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex max-w-lg mt-8 gap-x-4'
      >
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem className='flex-1'>
              <FormControl>
                <Input
                  placeholder='Add by email address. abc@example.com'
                  autoComplete='off'
                  {...field}
                />
              </FormControl>
              {isDirty && <FormMessage />}
            </FormItem>
          )}
        />
        <Button
          type='submit'
          variant={'brand-secondary'}
          disabled={!isDirty}
        >
          {isLoading ? (
            <Loader2Icon
              className='animate-spin'
              size={20}
            />
          ) : (
            <>
              <Plus className='w-4 h-4 mr-2' /> Add
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
