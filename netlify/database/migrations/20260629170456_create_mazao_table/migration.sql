CREATE TABLE "mazao" (
	"id" serial PRIMARY KEY,
	"created_at" timestamp DEFAULT now(),
	"aina_ya_zao" text NOT NULL,
	"bei" numeric NOT NULL,
	"eneo" text NOT NULL
);
