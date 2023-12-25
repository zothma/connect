/*
  Warnings:

  - You are about to drop the column `color` on the `advert` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "advert" DROP COLUMN "color";

-- CreateTable
CREATE TABLE "advert_gradient" (
    "id" SERIAL NOT NULL,
    "originX" INTEGER NOT NULL,
    "originY" INTEGER NOT NULL,
    "colorId" INTEGER NOT NULL,
    "advertId" TEXT NOT NULL,

    CONSTRAINT "advert_gradient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "advert_color" (
    "id" SERIAL NOT NULL,
    "hue" INTEGER NOT NULL,
    "saturation" INTEGER NOT NULL,
    "lightness" INTEGER NOT NULL,

    CONSTRAINT "advert_color_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "advert_gradient_advertId_key" ON "advert_gradient"("advertId");

-- CreateIndex
CREATE UNIQUE INDEX "advert_color_hue_saturation_lightness_key" ON "advert_color"("hue", "saturation", "lightness");

-- AddForeignKey
ALTER TABLE "advert_gradient" ADD CONSTRAINT "advert_gradient_advertId_fkey" FOREIGN KEY ("advertId") REFERENCES "advert"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "advert_gradient" ADD CONSTRAINT "advert_gradient_colorId_fkey" FOREIGN KEY ("colorId") REFERENCES "advert_color"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
