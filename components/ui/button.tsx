import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 min-h-[48px] min-w-[48px] touch-manipulation",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/90 shadow-btn",
        accent: "bg-primary text-white hover:bg-primary/90 shadow-btn",
        outline:
          "border-2 border-primary text-primary hover:bg-primary hover:text-white",
        ghost: "hover:bg-gray-100 text-text-dark",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-8 py-4",
        sm: "px-6 py-3 text-sm",
        lg: "px-10 py-5 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const mergedClassName = cn(buttonVariants({ variant, size, className }));

    if (asChild && React.isValidElement(props.children)) {
      const child = props.children as React.ReactElement<{ className?: string }>;
      return React.cloneElement(child, {
        ...child.props,
        className: cn(mergedClassName, child.props?.className),
      });
    }

    return (
      <button
        className={mergedClassName}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
