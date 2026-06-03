"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Slider } from "@/components/ui/slider";
import { SecurityBadge } from "@/components/ui/security-badge";
import { Modal } from "@/components/ui/modal";
import { PageTransition, FadeIn } from "@/components/motion/transitions";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { useFavoritesStore } from "@/lib/stores/favorites-store";
import { useToast } from "@/components/providers/toast-provider";
import { formatCurrency } from "@/lib/utils";
import { DEPOSIT } from "@/lib/constants";

const PROPERTY = {
  id: "prop-001",
  title: "3BHK Premium Apartment",
  locality: "Koramangala 5th Block",
  city: "Bangalore",
  bhk: 3,
  area: 1850,
  floor: 12,
  marketValue: 12000000,
  images: ["/images/property-1.jpg", "/images/property-2.jpg", "/images/property-3.jpg"],
  amenities: ["24x7 Security", "Swimming Pool", "Gym", "Covered Parking", "Power Backup", "Clubhouse", "Children's Play Area", "Landscaped Garden"],
  description: "A beautifully crafted 3BHK apartment in the heart of Koramangala, offering panoramic city views from the 12th floor. Premium finishes throughout with imported marble flooring, modular kitchen, and smart home automation.",
  owner: { name: "Rajesh K.", verified: true, properties: 3 },
  verified: true,
  listedDate: "2026-05-15",
};

export default function PropertyDetailPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [depositPercent, setDepositPercent] = useState<number>(DEPOSIT.recommendedPercentage);
  const [viewingModalOpen, setViewingModalOpen] = useState(false);
  const { isFavorite, toggleFavorite } = useFavoritesStore();
  const { toast } = useToast();

  const depositAmount = PROPERTY.marketValue * (depositPercent / 100);
  const monthlyPayout = Math.round((depositAmount * DEPOSIT.blendedYieldRate) / 12);
  const saved = isFavorite(PROPERTY.id);

  function handleFavorite() {
    toggleFavorite(PROPERTY.id);
    toast(saved ? "Removed from favorites" : "Saved to favorites!", saved ? "info" : "success");
  }

  function handleScheduleViewing() {
    setViewingModalOpen(false);
    toast("Viewing scheduled! Our RM will confirm within 24 hours.", "success");
  }

  return (
    <PageTransition>
      <section className="pt-24 pb-16">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Images + Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <FadeIn>
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="relative h-[400px] sm:h-[500px]">
                    <Image
                      src={PROPERTY.images[currentImage]}
                      alt={PROPERTY.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 66vw"
                      priority
                    />
                    {/* Favorite button */}
                    <button
                      onClick={handleFavorite}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 dark:bg-navy-800/90 backdrop-blur-sm flex items-center justify-center shadow-md hover:scale-110 transition-transform"
                      aria-label={saved ? "Remove from favorites" : "Save to favorites"}
                    >
                      <motion.span animate={{ scale: saved ? [1, 1.3, 1] : 1 }} transition={{ duration: 0.3 }}>
                        {saved ? "❤️" : "🤍"}
                      </motion.span>
                    </button>
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {PROPERTY.verified && <Badge variant="success" dot>Verified</Badge>}
                      <Badge variant="default" className="!bg-white/90 backdrop-blur-sm">{PROPERTY.bhk} BHK</Badge>
                    </div>
                  </div>
                  {/* Thumbnails */}
                  <div className="flex gap-2 p-3 bg-white dark:bg-navy-900">
                    {PROPERTY.images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentImage(i)}
                        className={`relative w-20 h-14 rounded-lg overflow-hidden transition-all ${i === currentImage ? "ring-2 ring-gold-500" : "opacity-60 hover:opacity-100"}`}
                      >
                        <Image src={img} alt="" fill className="object-cover" sizes="80px" />
                      </button>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Property Info */}
              <ScrollReveal>
                <div>
                  <Heading level={1} className="!text-3xl sm:!text-4xl">{PROPERTY.title}</Heading>
                  <Text muted className="mt-2">📍 {PROPERTY.locality}, {PROPERTY.city}</Text>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="outline">{PROPERTY.area} sq.ft</Badge>
                    <Badge variant="outline">{PROPERTY.bhk} Bedrooms</Badge>
                    <Badge variant="outline">Floor {PROPERTY.floor}</Badge>
                    <Badge variant="premium">{formatCurrency(PROPERTY.marketValue)}</Badge>
                  </div>
                </div>
              </ScrollReveal>

              {/* Description */}
              <ScrollReveal>
                <Card padding="lg">
                  <Heading level={4} className="mb-3">About This Property</Heading>
                  <Text muted>{PROPERTY.description}</Text>
                </Card>
              </ScrollReveal>

              {/* Amenities */}
              <ScrollReveal>
                <Card padding="lg">
                  <Heading level={4} className="mb-4">Amenities</Heading>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {PROPERTY.amenities.map((a) => (
                      <div key={a} className="flex items-center gap-2 text-sm text-navy-600 dark:text-navy-300">
                        <span className="text-gold-500">✓</span> {a}
                      </div>
                    ))}
                  </div>
                </Card>
              </ScrollReveal>

              {/* Trust */}
              <ScrollReveal>
                <div className="flex flex-wrap gap-3">
                  <SecurityBadge variant="nbfc" />
                  <SecurityBadge variant="escrow" />
                  <SecurityBadge variant="rera" />
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Sticky Calculator */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-6">
                <Card padding="lg" className="!border-gold-200 dark:!border-gold-500/20">
                  <Heading level={4} className="mb-1">Deposit Calculator</Heading>
                  <Text size="xs" muted className="mb-6">Calculate your deposit and see monthly savings</Text>

                  <Slider
                    label="Deposit Percentage"
                    value={depositPercent}
                    onChange={setDepositPercent}
                    min={DEPOSIT.minPercentage}
                    max={DEPOSIT.maxPercentage}
                    step={5}
                    formatValue={(v) => `${v}%`}
                  />

                  <div className="mt-6 space-y-3">
                    <div className="flex justify-between text-sm">
                      <Text size="sm" muted>Your Deposit</Text>
                      <Text size="sm" weight="bold" className="!text-navy-900 dark:!text-white">{formatCurrency(depositAmount)}</Text>
                    </div>
                    <div className="flex justify-between text-sm">
                      <Text size="sm" muted>Monthly Payout to Owner</Text>
                      <Text size="sm" weight="bold" className="!text-navy-900 dark:!text-white">{formatCurrency(monthlyPayout)}/mo</Text>
                    </div>
                    <div className="flex justify-between text-sm">
                      <Text size="sm" muted>Your Monthly Rent</Text>
                      <Text size="sm" weight="bold" className="!text-gold-600">₹0</Text>
                    </div>
                    <div className="h-px bg-navy-100 dark:bg-navy-800 my-2" />
                    <div className="flex justify-between text-sm">
                      <Text size="sm" muted>Annual Savings</Text>
                      <Text size="sm" weight="bold" className="!text-emerald-500">{formatCurrency(monthlyPayout * 12)}</Text>
                    </div>
                    <div className="flex justify-between text-sm">
                      <Text size="sm" muted>Deposit Returned</Text>
                      <Text size="sm" weight="bold" className="!text-navy-900 dark:!text-white">100%</Text>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <Button variant="primary" size="lg" fullWidth className="shadow-gold">
                      Start Deposit Process
                    </Button>
                    <Button variant="outline" size="md" fullWidth onClick={() => setViewingModalOpen(true)}>
                      Schedule Viewing
                    </Button>
                  </div>
                </Card>

                {/* Owner Info */}
                <Card padding="md">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold-100 dark:bg-gold-500/10 flex items-center justify-center text-sm font-bold text-gold-700">
                      {PROPERTY.owner.name[0]}
                    </div>
                    <div>
                      <Text size="sm" weight="medium" className="!text-navy-900 dark:!text-white">{PROPERTY.owner.name}</Text>
                      <Text size="xs" muted>{PROPERTY.owner.properties} properties · {PROPERTY.owner.verified ? "✓ Verified" : "Pending"}</Text>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Schedule Viewing Modal */}
      <Modal open={viewingModalOpen} onClose={() => setViewingModalOpen(false)} title="Schedule a Viewing" size="md">
        <div className="space-y-4">
          <Text muted>Select a preferred date and time. Our RM will confirm availability within 24 hours.</Text>
          <div className="grid grid-cols-3 gap-2">
            {["Tomorrow", "Sat, Jun 7", "Sun, Jun 8", "Mon, Jun 9", "Tue, Jun 10", "Wed, Jun 11"].map((d) => (
              <button key={d} className="px-3 py-2.5 rounded-lg border border-navy-200 dark:border-navy-700 text-sm hover:border-gold-400 hover:bg-gold-50/50 dark:hover:bg-gold-500/5 transition-colors">
                {d}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {["Morning (9-12)", "Afternoon (12-4)", "Evening (4-7)"].map((t) => (
              <button key={t} className="px-3 py-2.5 rounded-lg border border-navy-200 dark:border-navy-700 text-xs hover:border-gold-400 hover:bg-gold-50/50 dark:hover:bg-gold-500/5 transition-colors">
                {t}
              </button>
            ))}
          </div>
          <Button variant="primary" fullWidth onClick={handleScheduleViewing}>
            Confirm Viewing
          </Button>
        </div>
      </Modal>
    </PageTransition>
  );
}
