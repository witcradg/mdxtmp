import Link from "next/link"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button, buttonVariants } from "@/components/ui/button"

export const Pricing = () => {
  const automakers = "Pontiac, GM, American, Japanese, German"
  return (
    <Table className="text-xl">
      <TableCaption>Avaliable Services</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="whitespace-nowrap">Service</TableHead>
          <TableHead>Vehicle Type</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className="text-right">Schedule Service</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Car Maintenance</TableCell>
          <TableCell>{automakers}</TableCell>
          <TableCell>$99.00</TableCell>
          <TableCell className="text-right">
            <Button asChild>
              <Link href="/appointment">Schedule</Link>
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Standard Oil Change Service</TableCell>
          <TableCell>{automakers}</TableCell>
          <TableCell>$49.00</TableCell>
          <TableCell className="text-right">
            <Button asChild>
              <Link href="/appointment">Schedule</Link>
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Water pumps</TableCell>
          <TableCell>{automakers}</TableCell>
          <TableCell>$129.00</TableCell>
          <TableCell className="text-right">
            <Button asChild>
              <Link href="/appointment">Schedule</Link>
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Fuel pumps</TableCell>
          <TableCell>{automakers}</TableCell>
          <TableCell>$129.00</TableCell>
          <TableCell className="text-right">
            <Button asChild>
              <Link href="/appointment">Schedule</Link>
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Brake and radiator service</TableCell>
          <TableCell>{automakers}</TableCell>
          <TableCell>$129.00</TableCell>
          <TableCell className="text-right">
            <Button asChild>
              <Link href="/appointment">Schedule</Link>
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Electrical systems service and repair</TableCell>
          <TableCell>{automakers}</TableCell>
          <TableCell>$129.00</TableCell>
          <TableCell className="text-right">
            <Button asChild>
              <Link href="/appointment">Schedule</Link>
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Steering and suspension services</TableCell>
          <TableCell>{automakers}</TableCell>
          <TableCell>$129.00</TableCell>
          <TableCell className="text-right">
            <Button asChild>
              <Link href="/appointment">Schedule</Link>
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell> Heating and AC cooling services</TableCell>
          <TableCell>{automakers}</TableCell>
          <TableCell>$129.00</TableCell>
          <TableCell className="text-right">
            <Button asChild>
              <Link href="/appointment">Schedule</Link>
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Computer diagnostics</TableCell>
          <TableCell>{automakers}</TableCell>
          <TableCell>$129.00</TableCell>
          <TableCell className="text-right">
            <Button asChild>
              <Link href="/appointment">Schedule</Link>
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Brake and transmission fluid replacement</TableCell>
          <TableCell>{automakers}</TableCell>
          <TableCell>$129.00</TableCell>
          <TableCell className="text-right">
            <Button asChild>
              <Link href="/appointment">Schedule</Link>
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default Pricing
