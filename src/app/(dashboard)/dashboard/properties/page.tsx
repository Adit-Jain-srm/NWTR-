"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { PageTransition } from "@/components/motion/transitions";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { formatCurrency } from "@/lib/utils";

const properties = [
  { id: "1", title: "3BHK Premium Apartment", locality: "Koramangala 5th Block", bhk: 3, area: 1850, value: 12000000, img: "/images/property-1.jpg" },
  { id: "2", title: "4BHK Luxury Villa", locality: "Indiranagar 12th Main", bhk: 4, area: 2800, value: 25000000, img: "/images/property-2.jpg" },
  { id: "3", title: "2BHK Modern Flat", locality: "HSR Layout Sector 2", bhk: 2, area: 1200, value: 8500000, img: "/images/property-3.jpg" },
  { id: "4", title: "3BHK Garden View", locality: "Whitefield", bhk: 3, area: 1650, value: 9500000, img: "/images/property-1.jpg" },
  { id: "5", title: "Penthouse Duplex", locality: "MG Road", bhk: 5, area: 3500, value: 42000000, img: "/images/property-2.jpg" },
  { id: "6", title: "3BHK Smart Home", locality: "Sarjapur Road", bhk: 3, area: 1700, value: 11000000, img: "/images/property-3.jpg" },
];

export default function PropertiesBrowse() {
  const [search, setSearch] = useState("");
  const [bhkFilter, setBhkFilter] = useState("");
  const [maxValue, setMaxValue] = useState(50000000);

  const filtered = properties.filter((p) => {
    if (search && !p.title.toLowerCase().includes(search.toLowerCase()) && !p.locality.toLowerCase().includes(search.toLowerCase())) return false;
    if (bhkFilter && p.bhk !== parseInt(bhkFilter)) return false;
    if (p.value > maxValue) return false;
    return true;
  });

  return (
    <PageTransition>
      <div className="space-y-6">
        <div>
          <Heading level={2}>Browse Properties</Heading>
          <Text muted className="mt-1">Premium verified listings in Bangalore</Text>
        </div>

        {/* Filters */}
        <Card padding="md" className="!p-4 sm:!p-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
            <Input
              placeholder="Search by name or locality..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              icon={<span className="text-sm">🔍</span>}
            />
            <Select
              placeholder="All BHK"
              options={[
                { value: "2", label: "2 BHK" },
                { value: "3", label: "3 BHK" },
                { value: "4", label: "4 BHK" },
                { value: "5", label: "5+ BHK" },
              ]}
              value={bhkFilter}
              onChange={(e) => setBhkFilter(e.target.value)}
            />
            <Slider
              label="Max Property Value"
              value={maxValue}
              onChange={setMaxValue}
              min={5000000}
              max={50000000}
              step={5000000}
              formatValue={formatCurrency}
            />
          </div>
        </Card>

        {/* Results */}
        <div className="flex items-center justify-between">
          <Text size="sm" muted>{filtered.length} properties found</Text>
        </div>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <StaggerItem key={p.id}>
              <Card variant="interactive" padding="none" className="overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant="default" className="!bg-white/90 !text-navy-700 backdrop-blur-sm">{p.bhk} BHK</Badge>
                  </div>
                  <div className="absolute top-3 left-3">
                    <Badge variant="success" dot>Verified</Badge>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-navy-900 dark:text-white">{p.title}</h3>
                  <Text size="sm" muted className="mt-1">📍 {p.locality}</Text>
                  <div className="mt-3 flex gap-3">
                    <Badge variant="outline">{p.area} sq.ft</Badge>
                    <Badge variant="outline">{formatCurrency(p.value)}</Badge>
                  </div>
                  <div className="mt-4 pt-4 border-t border-navy-100 dark:border-navy-800 flex items-center justify-between">
                    <div>
                      <Text size="xs" muted>Deposit (70%)</Text>
                      <p className="font-display font-bold text-navy-900 dark:text-white">{formatCurrency(p.value * 0.7)}</p>
                    </div>
                    <Button variant="primary" size="sm">View Details</Button>
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </PageTransition>
  );
}
