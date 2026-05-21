import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient({ datasourceUrl: process.env.DATABASE_URL });

async function main() {
  console.log("Seeding NWTR database...");

  const password = await bcrypt.hash("NwtrDemo2026!", 12);

  // Users
  const tenant = await prisma.user.upsert({
    where: { email: "aditya@nwtr.in" },
    update: {},
    create: { email: "aditya@nwtr.in", password, firstName: "Aditya", lastName: "Jain", role: "TENANT", kycTier: 2, phone: "+919876543210" },
  });

  const owner = await prisma.user.upsert({
    where: { email: "rajesh@nwtr.in" },
    update: {},
    create: { email: "rajesh@nwtr.in", password, firstName: "Rajesh", lastName: "Kumar", role: "OWNER", kycTier: 3, phone: "+919876543211" },
  });

  const rm = await prisma.user.upsert({
    where: { email: "ankit@nwtr.in" },
    update: {},
    create: { email: "ankit@nwtr.in", password, firstName: "Ankit", lastName: "Verma", role: "RM", kycTier: 3 },
  });

  const admin = await prisma.user.upsert({
    where: { email: "admin@nwtr.in" },
    update: {},
    create: { email: "admin@nwtr.in", password, firstName: "Vikram", lastName: "Singh", role: "ADMIN", kycTier: 3 },
  });

  await prisma.user.upsert({
    where: { email: "super@nwtr.in" },
    update: {},
    create: { email: "super@nwtr.in", password, firstName: "System", lastName: "Admin", role: "SUPER_ADMIN", kycTier: 3 },
  });

  // Properties
  const propertyData = [
    { title: "3BHK Premium Apartment", bhk: 3, area: 1850, city: "Bangalore", locality: "Koramangala 5th Block", marketValue: 12000000 },
    { title: "4BHK Luxury Villa", bhk: 4, area: 2800, city: "Bangalore", locality: "Indiranagar 12th Main", marketValue: 25000000 },
    { title: "2BHK Modern Flat", bhk: 2, area: 1200, city: "Bangalore", locality: "HSR Layout Sector 2", marketValue: 8500000 },
    { title: "3BHK Garden View", bhk: 3, area: 1650, city: "Bangalore", locality: "Whitefield ITPL Road", marketValue: 9500000 },
    { title: "Penthouse Duplex", bhk: 5, area: 3500, city: "Bangalore", locality: "MG Road", marketValue: 42000000 },
    { title: "3BHK Smart Home", bhk: 3, area: 1700, city: "Bangalore", locality: "Sarjapur Road", marketValue: 11000000 },
    { title: "2BHK Studio Apartment", bhk: 2, area: 950, city: "Bangalore", locality: "Electronic City Phase 1", marketValue: 5500000 },
    { title: "4BHK Independent House", bhk: 4, area: 2400, city: "Bangalore", locality: "Jayanagar 4th Block", marketValue: 18000000 },
    { title: "3BHK Lake View", bhk: 3, area: 1900, city: "Bangalore", locality: "Bellandur", marketValue: 13500000 },
    { title: "2BHK Corner Unit", bhk: 2, area: 1100, city: "Bangalore", locality: "BTM Layout Stage 2", marketValue: 7500000 },
    { title: "4BHK Premium Tower", bhk: 4, area: 2600, city: "Bangalore", locality: "Hebbal", marketValue: 22000000 },
    { title: "3BHK Gated Community", bhk: 3, area: 1750, city: "Bangalore", locality: "Marathahalli", marketValue: 10500000 },
    { title: "5BHK Villa Estate", bhk: 5, area: 4200, city: "Bangalore", locality: "Sankey Road", marketValue: 55000000 },
    { title: "2BHK Furnished", bhk: 2, area: 1050, city: "Bangalore", locality: "Koramangala 1st Block", marketValue: 9000000 },
    { title: "3BHK High Rise", bhk: 3, area: 1800, city: "Bangalore", locality: "Outer Ring Road", marketValue: 12500000 },
    { title: "4BHK Terrace Apartment", bhk: 4, area: 2300, city: "Bangalore", locality: "Ulsoor", marketValue: 20000000 },
    { title: "3BHK Near Metro", bhk: 3, area: 1600, city: "Bangalore", locality: "Yeshwanthpur", marketValue: 8800000 },
    { title: "2BHK Premium Studio", bhk: 2, area: 980, city: "Bangalore", locality: "JP Nagar Phase 6", marketValue: 6200000 },
    { title: "3BHK Park Facing", bhk: 3, area: 1850, city: "Bangalore", locality: "Domlur", marketValue: 14000000 },
    { title: "4BHK Riverside", bhk: 4, area: 2700, city: "Bangalore", locality: "Hennur Road", marketValue: 16000000 },
  ];

  const properties = [];
  for (const p of propertyData) {
    const prop = await prisma.property.create({
      data: {
        ...p,
        ownerId: owner.id,
        address: { line1: `${p.locality}, ${p.city}`, pincode: "560001" },
        amenities: ["Parking", "Gym", "Swimming Pool", "24x7 Security"],
        images: [],
        status: "LISTED",
        verifiedAt: new Date(),
        verifiedBy: rm.id,
      },
    });
    properties.push(prop);
  }

  // Deposits
  const deposit = await prisma.deposit.create({
    data: {
      tenantId: tenant.id,
      ownerId: owner.id,
      propertyId: properties[0].id,
      amount: 8400000,
      percentage: 70,
      tenure: 12,
      monthlyPayout: 45000,
      status: "ACTIVE",
      confirmedAt: new Date("2026-03-15"),
      maturesAt: new Date("2027-03-15"),
    },
  });

  // Payouts
  for (let i = 0; i < 3; i++) {
    const month = new Date(2026, 2 + i, 1);
    await prisma.payout.create({
      data: {
        depositId: deposit.id,
        ownerId: owner.id,
        amount: 45000,
        scheduledDate: month,
        status: "COMPLETED",
        executedAt: month,
      },
    });
  }

  // RM Assignment
  await prisma.rMAssignment.create({
    data: { rmId: rm.id, clientId: tenant.id },
  });
  await prisma.rMAssignment.create({
    data: { rmId: rm.id, clientId: owner.id },
  });

  console.log(`Seeded: 5 users, ${properties.length} properties, 1 deposit, 3 payouts, 2 RM assignments`);
  console.log("\nLogin credentials (all users): NwtrDemo2026!");
  console.log("Tenant: aditya@nwtr.in | Owner: rajesh@nwtr.in | RM: ankit@nwtr.in | Admin: admin@nwtr.in");
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
