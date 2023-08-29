type EnvsKeys = "PORT"  
const environment:Record<EnvsKeys, {value?:string,defaultValue:string}> = {
  PORT: {
    value: process.env.PORT,
    defaultValue: String(3306)
  },
};

const handler:ProxyHandler<typeof environment> = {  
  get(target, property: keyof typeof environment) {
    const objectValue = target[property]
    return objectValue?.value || objectValue?.defaultValue
   },
  set(target, property: string, value: any) {
    throw new Error("Its not allowed to set values to Environment Object.") 
  },
};

const environmentProxy:Record<EnvsKeys, String>  = new Proxy(environment, handler) as any;

export default environmentProxy;
