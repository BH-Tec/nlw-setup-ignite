import * as Popover from '@radix-ui/react-popover';
import clsx from 'clsx'

import { ProgressBar } from './ProgressBar';

interface HabitDayProps {
  completed: number
  amount: number
}

export function HabitDay(props: HabitDayProps) {
  const completedPercentual = Math.round((props.completed / props.amount) * 100)

  return(
    <Popover.Root>
      <Popover.Trigger 
        className={clsx('w-10 h-10 border-2 rounded-lg', {
          'bg-zinc-900 border-zinc-800' : completedPercentual === 0,
          'bg-violet-900 border-violet-700' : completedPercentual > 0 && completedPercentual < 20,
          'bg-violet-800 border-violet-600' : completedPercentual >= 20 && completedPercentual < 40,
          'bg-violet-700 border-violet-500' : completedPercentual >= 40 && completedPercentual < 60,
          'bg-violet-600 border-violet-500' : completedPercentual >= 60 && completedPercentual < 80,
          'bg-violet-500 border-violet-400' : completedPercentual >= 80,
        })}
      />

      <Popover.Portal>
        <Popover.Content className='min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col'>
          <span className='font-semibold text-zinc-400'>quinta-feira</span>
          <span className='mt-1 font-extrabold leading-tight text-xl'>19/01</span>

          <ProgressBar progress={completedPercentual} />

          <Popover.Arrow height={8} width={16} className='fill-zinc-900'/>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}