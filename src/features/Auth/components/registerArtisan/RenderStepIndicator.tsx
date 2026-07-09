import { Check } from "lucide-react";

  interface PropsI {
    step : number
  }
  
  export const RenderStepIndicator = ({step } : PropsI )  => (
    <div className="flex items-center justify-between w-full mb-8">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex items-center">
          <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300 ${
            step >= i ? "bg-primary border-primary text-primary-foreground" : "bg-background border-border text-muted-foreground"
          }`}>
            {step > i ? <Check className="w-4 h-4" /> : <span className="text-xs font-bold">{i}</span>}
          </div>
          {i < 4 && (
            <div className={`w-8 sm:w-16 h-0.5 mx-2 ${step > i ? "bg-primary" : "bg-border"}`} />
          )}
        </div>
      ))}
    </div>
  );