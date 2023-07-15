
export function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  const newDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      return descriptor.value.bind(this);
    }
  }

  return newDescriptor;
}