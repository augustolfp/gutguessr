-- CreateTable
CREATE TABLE "GameBlueprint" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GameBlueprint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoundBlueprint" (
    "id" SERIAL NOT NULL,
    "game_blueprint_id" INTEGER NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "heading" INTEGER NOT NULL,
    "pitch" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RoundBlueprint_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RoundBlueprint" ADD CONSTRAINT "RoundBlueprint_game_blueprint_id_fkey" FOREIGN KEY ("game_blueprint_id") REFERENCES "GameBlueprint"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
