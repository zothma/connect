-- RenameTable
ALTER TABLE "project" RENAME TO "advert";

-- RenameConstraint
ALTER TABLE "advert" RENAME CONSTRAINT "project_domainId_fkey" TO "advert_domainId_fkey";

-- RenameConstraint
ALTER TABLE "advert" RENAME CONSTRAINT "project_ownerId_fkey" TO "advert_ownerId_fkey";

-- RenameConstraint
ALTER TABLE "advert" RENAME CONSTRAINT "project_typeId_fkey" TO "advert_typeId_fkey";

-- RenamePrimaryKey
ALTER TABLE "advert" RENAME CONSTRAINT "project_pkey" TO "advert_pkey";