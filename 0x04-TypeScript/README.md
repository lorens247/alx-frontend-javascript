# 0x04. Typescript

# TypeScript Basics

## Interfaces, Classes, and Functions

### Interfaces

In TypeScript, interfaces allow you to define the shape of objects. They provide a blueprint for the structure that objects must adhere to. Here's an example:

```typescript
interface Person {
  name: string;
  age: number;
}

const user: Person = {
  name: "John Doe",
  age: 25,
};
```

### Classes

Classes enable you to create reusable and organized code by encapsulating data and behavior. Here's a simple class example:

```typescript
class Animal {
  constructor(public name: string) {}

  makeSound() {
    console.log("Some generic sound");
  }
}

const cat = new Animal("Whiskers");
cat.makeSound();
```

### Functions

Functions in TypeScript can be typed to specify parameter types and return types:

```typescript
function add(x: number, y: number): number {
  return x + y;
}

const result = add(3, 7);
```

## Working with the DOM and TypeScript

TypeScript allows you to work with the DOM in a more type-safe manner. For example, you can use type assertions to specify the type of a DOM element:

```typescript
const myElement = document.getElementById("myElement") as HTMLInputElement;
myElement.value = "Hello, TypeScript!";
```

## Generic Types

Generics enable you to write reusable, type-safe code that can work with different types. Here's a simple example of a generic function:

```typescript
function identity<T>(arg: T): T {
  return arg;
}

const result = identity<string>("Hello, generics!");
```

## Namespaces and Declaration Merging

### Namespaces

Namespaces help organize code by encapsulating related functionality. For example:

```typescript
namespace Geometry {
  export interface Point {
    x: number;
    y: number;
  }

  export function distance(p1: Point, p2: Point): number {
    // Calculate distance
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
  }
}

const point1: Geometry.Point = { x: 0, y: 0 };
const point2: Geometry.Point = { x: 3, y: 4 };
const distance = Geometry.distance(point1, point2);
```

### Declaration Merging

TypeScript allows you to merge declarations of the same entity. This is useful, for example, when working with interfaces and multiple declarations for the same object:

```typescript
interface Car {
  brand: string;
  speed: number;
}

interface Car {
  model: string;
}

const myCar: Car = {
  brand: "Toyota",
  speed: 120,
  model: "Camry",
};
```

## Ambient Namespace for External Libraries

To import an external library, you can use an ambient namespace declaration. For example, for the "axios" library:

```typescript
// typings/axios/index.d.ts
declare namespace Axios {
  interface AxiosResponse<T = any> {
    data: T;
    status: number;
    // ... other properties
  }

  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<AxiosResponse>;
    // ... other methods
  }

  interface AxiosRequestConfig {
    // ... configuration options
  }
}

// app.ts
const axiosInstance: Axios.AxiosInstance = axios.create();
axiosInstance.get("/api/data").then((response: Axios.AxiosResponse) => {
  console.log(response.data);
});
```

## Basic Nominal Typing with TypeScript

Nominal typing allows you to distinguish between types based on their names rather than their structures. TypeScript primarily uses structural typing, but you can achieve nominal typing using techniques like branding:

```typescript
type Brand<T, BrandName> = T & { __brand: BrandName };

type Kilometers = Brand<number, "Kilometers">;

function toKilometers(miles: number): Kilometers {
  return miles as Kilometers;
}

const distanceInKm: Kilometers = toKilometers(10);
```

In this example, `Kilometers` is a nominal type created using the `Brand` utility, helping avoid accidental type mixing.