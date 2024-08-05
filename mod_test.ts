import { assertEquals } from "@std/assert";
import { Dollar } from "./mod.ts";

Deno.test(function testMultiplication() {
  const five = new Dollar(5);
  five.times(2);
  assertEquals(10, five.amount);
});
