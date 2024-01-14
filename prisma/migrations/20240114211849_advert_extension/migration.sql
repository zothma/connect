-- AlterTable
ALTER TABLE "advert" ADD COLUMN     "body" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "endDate" TIMESTAMP(3),
ADD COLUMN     "startDate" TIMESTAMP(3);
