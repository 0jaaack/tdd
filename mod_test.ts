import { assert, assertEquals, assertFalse } from "@std/assert";
import { Dollar, Franc } from "./mod.ts";

Deno.test(function testMultiplication() {
  const five = new Dollar(5);
  assertEquals(new Dollar(10), five.times(2));
  assertEquals(new Dollar(15), five.times(3));
});

Deno.test(function testEquality() {
  assert(new Dollar(5).equals(new Dollar(5)));
  assertFalse(new Dollar(5).equals(new Dollar(6)));
});

Deno.test(function testFrancMultiplication() {
  const five = new Franc(5);
  assertEquals(new Franc(10), five.times(2));
  assertEquals(new Franc(15), five.times(3));
});
