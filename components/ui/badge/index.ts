import { type VariantProps, cva } from 'class-variance-authority'

export { default as Badge } from './Badge.vue'

export const badgeVariants = cva(
  'inline-flex items-center rounded-md border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
        brand:
          'bg-brand-500/10 dark:bg-brand-400/10 text-brand-500 shadow hover:bg-transparent border-brand-500/20',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
        outline: 'text-foreground'
      },
      size: {
        default: 'px-2.5 py-0.5',
        sm: 'px-1.5 py-0.5',
        lg: 'px-3.5 py-0.5'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export type BadgeVariants = VariantProps<typeof badgeVariants>
