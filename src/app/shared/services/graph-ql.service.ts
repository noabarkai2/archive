import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface EmptyObject {
  // Define any properties that represent an empty object
}

@Injectable({
  providedIn: 'root',
})
export class GraphqlGeneralService {
  constructor() {}

  executeQuery<TInput extends EmptyObject, TOutput>(
    url: string,
    modelName: string,
    variables: TInput,
    outputModel: (data: any) => TOutput
  ) {
    const graphqlQuery = this.generateQuery(modelName, variables);

    // const queryRef: QueryRef<any, TInput> = this.apollo.use(url).watchQuery<TOutput, TInput>({
    //   query: gql`${graphqlQuery}`,
    //   variables: variables as Record<string, any>,
    // });
    return null
    // return queryRef.valueChanges.pipe(
    //   map((result) => {
    //     return outputModel(result.data);
    //   })
    // );
  }

  private generateQuery<TInput extends Record<string, any>>(modelName: string, variables: TInput): string {
    if (typeof variables === 'object' && variables !== null) {
      const fields = this.generateFields(variables);
      return `
        query ${modelName}(${this.generateVariables(variables)}) {
          ${modelName}(${fields})
        }
      `;
    } else {
      return '';
    }
  }  

  private generateVariables(variables: Record<string, any>): string {
    return Object.keys(variables)
      .map((variable) => `$${variable}: ${this.getType(variables[variable])}`)
      .join(', ');
  }

  private generateFields(variables: Record<string, any> | unknown): string {
    if (typeof variables === 'object' && variables !== null) {
      return Object.keys(variables)
        .map((variable) => {
          const nestedFields = this.generateFields((variables as Record<string, any>)[variable]);
          return `${variable} { ${nestedFields} }`;
        })
        .join('\n');
    } else {
      return '';
    }
  }
  

  private getType(value: any): string {
    if (Array.isArray(value)) {
      return `[${this.getType(value[0])}]`;
    } else if (typeof value === 'object') {
      return 'JSON';
    } else {
      return typeof value;
    }
  }
}
