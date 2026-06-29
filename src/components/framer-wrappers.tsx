'use client'

import ProcurementTileFramerComponent from '@/framer/procurement-tile'
import TestimonialBlockFramerComponent from '@/framer/testimonial-block'
import {
  BuiltricButton,
  type BuiltricButtonVariant,
} from '@/components/builtric-button'

type LegacyVariant = 'Variant 1' | 'Secondary' | 'Try Yellow' | 'Try Black'

function mapVariant(variant?: LegacyVariant): BuiltricButtonVariant {
  if (variant === 'Try Yellow') return 'cta'
  if (variant === 'Try Black') return 'try-black'
  return 'primary'
}

export function FramerButton({
  label,
  href,
  variant,
}: {
  label: string
  href: string
  variant?: LegacyVariant
}) {
  return <BuiltricButton label={label} href={href} variant={mapVariant(variant)} />
}

type TileVariant = 'Procurement' | 'Finance' | 'Management' | 'HSE' | 'Data' | 'Primary Mobile'

export function FramerProcurementTile({ variant }: { variant: TileVariant }) {
  return (
    <ProcurementTileFramerComponent.Responsive
      {...({ variant } as Record<string, unknown>)}
    />
  )
}

export function FramerTestimonial({
  quote,
  name,
  role,
}: {
  quote: string
  name: string
  role: string
}) {
  return (
    <TestimonialBlockFramerComponent.Responsive
      {...({
        DdLwMJfiL: quote,
        XyUS6yu0H: name,
        EeV61DZPh: role,
      } as Record<string, unknown>)}
    />
  )
}
