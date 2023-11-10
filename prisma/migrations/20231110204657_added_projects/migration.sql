-- CreateTable
CREATE TABLE "project" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "domainId" INTEGER NOT NULL,
    "typeId" INTEGER NOT NULL,
    "ownerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "professional_bridge" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "professional_bridge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rome_domain" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "rome_domain_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_bookmark" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "professional_bridge_name_key" ON "professional_bridge"("name");

-- CreateIndex
CREATE UNIQUE INDEX "rome_domain_name_key" ON "rome_domain"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_bookmark_AB_unique" ON "_bookmark"("A", "B");

-- CreateIndex
CREATE INDEX "_bookmark_B_index" ON "_bookmark"("B");

-- AddForeignKey
ALTER TABLE "project" ADD CONSTRAINT "project_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "professional_bridge"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project" ADD CONSTRAINT "project_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project" ADD CONSTRAINT "project_domainId_fkey" FOREIGN KEY ("domainId") REFERENCES "rome_domain"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_bookmark" ADD CONSTRAINT "_bookmark_A_fkey" FOREIGN KEY ("A") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_bookmark" ADD CONSTRAINT "_bookmark_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
