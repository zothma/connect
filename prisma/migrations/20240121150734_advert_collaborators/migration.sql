-- CreateTable
CREATE TABLE "advert_collaborator" (
    "advertId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "roleId" INTEGER NOT NULL,

    CONSTRAINT "advert_collaborator_pkey" PRIMARY KEY ("advertId","userId")
);

-- CreateTable
CREATE TABLE "advert_collaborator_role" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "advert_collaborator_role_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "advert_collaborator_role_name_key" ON "advert_collaborator_role"("name");

-- AddForeignKey
ALTER TABLE "advert_collaborator" ADD CONSTRAINT "advert_collaborator_advertId_fkey" FOREIGN KEY ("advertId") REFERENCES "advert"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "advert_collaborator" ADD CONSTRAINT "advert_collaborator_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "advert_collaborator" ADD CONSTRAINT "advert_collaborator_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "advert_collaborator_role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
