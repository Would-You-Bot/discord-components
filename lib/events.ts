/*
MIT License

Copyright (c) 2023 shadcn

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import { z } from "zod";

const eventSchema = z.object({
	name: z.enum([
		"copy_npm_command",
		"copy_usage_import_code",
		"copy_usage_code",
		"copy_primitive_code",
		"copy_theme_code",
		"copy_block_code",
		"copy_chunk_code",
		"enable_lift_mode",
		"copy_chart_code",
		"copy_chart_theme",
		"copy_chart_data",
		"copy_color",
		"set_layout"
	]),
	// declare type AllowedPropertyValues = string | number | boolean | null
	properties: z
		.record(z.union([z.string(), z.number(), z.boolean(), z.null()]))
		.optional()
});

export type Event = z.infer<typeof eventSchema>;

export function trackEvent(input: Event): void {
	const event = eventSchema.parse(input);
	if (event) {
		// TODO: Use databuddy event tracking
	}
}
