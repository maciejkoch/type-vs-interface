// Original interface
interface Original {
  property1: number;
  property2: string;
  property3: boolean;
}

// Override the type of property2
interface Override extends Omit<Original, 'property2'> {
  property2: number;
}

// Example usage
const original: Original = {
  property1: 10,
  property2: 'Hello',
  property3: true,
};

const overrideObj: Override = {
  property1: 10,
  property2: 20, // Now property2 is of type number
  property3: true,
};
