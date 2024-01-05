import { HTMLAttributes } from "react";

export default function Section({
  children,
  backgroundClassName,
  title,
  subtitle,
  description,
  className,
  withPadding  = true,
  ...rest
}: {
  children?: React.ReactNode,
  backgroundClassName?: string,
  title?: string,
  description?: string,
  subtitle?: string,
  withPadding?: boolean
} & HTMLAttributes<HTMLElement>) {
  const hasText = title || description || subtitle
  return (
    <section {...rest} className={`${backgroundClassName} ${withPadding ? 'p-12' : ''}`}>
      <div className={` max-app-width mx-auto  h-full `}>
        <div className={`flex flex-col  ${hasText ? 'gap-12' : ''}`}>
          <div className="flex gap-4 flex-col text-center text-white">
            
            <span  className='text-xs uppercase'>{title}</span>
            <span  className='text-xl font-bold'>{subtitle}</span>
            <span  className='text-neutral-400'>{description}</span>
          </div>
          <div className={className}>
            {children}

          </div>
        </div>
      </div>
    </section>
  );
}