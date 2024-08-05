import { assert, assertEquals, assertFalse } from "@std/assert";
import { Dollar } from "./mod.ts";

Deno.test(function testMultiplication() {
  const five = new Dollar(5);
  assertEquals(new Dollar(10), five.times(2));
  assertEquals(new Dollar(15), five.times(3));
});

Deno.test(function testEquality() {
  assert(new Dollar(5).equals(new Dollar(5)));
  assertFalse(new Dollar(5).equals(new Dollar(6)));
});
