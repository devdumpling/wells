import { TableCell, TableRow, TableBody, Table } from "@/components/ui/table";
import Attributes from "./Attributes";

export default function StatBlock() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold font-pixelify">info</h2>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Class</TableCell>
              <TableCell>Software Eng.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Subclass</TableCell>
              <TableCell>Frontend Platform</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Job</TableCell>
              <TableCell>GoodRx</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold font-pixelify">proficiencies</h2>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Weapons</TableCell>
              <TableCell>TypeScript, Rust</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Spells</TableCell>
              <TableCell>Next, React, GQL</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Skills</TableCell>
              <TableCell>Tooling, Design</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="space-y-4">
        <Attributes />
      </div>
    </div>
  );
}
