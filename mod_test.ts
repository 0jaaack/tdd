import { assertEquals } from "@std/assert";
import { Dollar } from "./mod.ts";

Deno.test(function testMultiplication() {
  const five = new Dollar(5);
  let product: Dollar = five.times(2);
  assertEquals(10, product.amount);
  product = five.times(3);
  assertEquals(15, product.amount);
});
