import { tipOptions } from "../data/tips";



type TipPercentageFormProps = {
    setTip : React.Dispatch<React.SetStateAction<number>>
}

export default function TipPercentageForm({setTip}: TipPercentageFormProps) {

  

  return (
    <div>
      <h3 className="font-black text-2xl">Propina</h3>

      <form>
        {tipOptions.map((tip) => (
          <div key={tip.id} className="flex gap-2">
            <label htmlFor={tip.id}>{tip.label}</label>
            <input 
                id={tip.id}
                type="radio"
                name="tip"
                value={tip.value}
                onChange={e => setTip(+e.target.value)}
            />
          </div>
        ))}
      </form>
    </div>
  );
}
